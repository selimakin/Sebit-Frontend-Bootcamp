import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent implements OnInit {
  id: any;
  post: any = {};

  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required]),
  });
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPost(this.id).subscribe((res) => {
      this.post = res;
      this.form.patchValue({
        title: this.post.title,
        body: this.post.body,
      });
    });
  }

  onSubmit() {
    const request = {
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
      imageId: this.post.imageId,
      userId: this.post.userId,
    };
    this.blogService.updatePost(this.post.id, request).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }
}
