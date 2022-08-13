import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material/dialog';

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

  getBlogList() {
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
    });
  }
}
