import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css'],
})
export class ViewArticleComponent implements OnInit {
  articleIndex: any;
  articlesArray: Array<any> = [];
  article: any = {};
  username: string = '';
  comment: string = '';

  constructor(
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.articleIndex = this.route.snapshot.paramMap.get('articleIndex');
    this.articleService.getArticles().subscribe((res) => {
      this.articlesArray = res;
      this.article = this.articlesArray[this.articleIndex];
    });
  }

  addComment() {
    if (this.username == '' || this.comment == '') {
      this._snackBar.open('Lütfen tüm alanları doldurunuz', 'Kapat');
    } else {
      const obj = {
        username: this.username,
        comment: this.comment,
      };
      this.article.comments.push(obj);
      this.articleService.updateArticle(this.article).subscribe((res) => {
        this.username = '';
        this.comment = '';
      });
    }
  }
}
