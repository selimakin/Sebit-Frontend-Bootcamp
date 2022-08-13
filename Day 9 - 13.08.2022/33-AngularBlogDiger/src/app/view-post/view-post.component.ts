import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
})
export class ViewPostComponent implements OnInit {
  id: any;
  post: any = {};
  comments: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPost(this.id).subscribe((res) => (this.post = res));
    this.commentService.getComments().subscribe((res) => {
      this.comments = res.filter((x: { postId: any }) => x.postId == this.id);
    });
  }
}
