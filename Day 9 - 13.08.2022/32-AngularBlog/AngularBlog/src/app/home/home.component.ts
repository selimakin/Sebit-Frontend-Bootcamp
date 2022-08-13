import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material/dialog';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

interface Blog {
  title: string;
  body: string;
  imageId: number;
  userId: number;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogData: Array<Blog> = [];
  page: number = 1;
  pageSize: number = 8;
  // collectionSize: number = 100;
  constructor(private blogService: BlogService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getBlogList();
  }

  openDialog(element: Blog, viewOrUpdate: boolean) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      // width: '450px',
      data: { blog: element, isUpdate: viewOrUpdate },
    });

    // Hepsini almak istersek
    // dialogRef.afterClosed().subscribe(() => {
    //   this.getBlogList();
    // });
  }

  getBlogList() {
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
    });
  }
}
