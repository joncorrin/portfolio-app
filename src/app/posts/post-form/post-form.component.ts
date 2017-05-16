import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Post} from "../post.model";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  date: Date;
  adminPost: Post;
  content: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.postIsEdited.subscribe(
      (adminPost: Post) => this.adminPost = adminPost
    );
  }

  onSubmit(form: NgForm){
    if (this.adminPost) {
      this.content = form.value.content;
      this.date = new Date();
      this.adminPost = new Post(this.content, this.date);
      console.log(this.content + ' ' + this.date + ' ' + this.adminPost);
      this.postService.addPost(this.adminPost)
        .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    } else {
      const adminPost = new Post(this.content, this.date);
      this.postService.addPost(adminPost)
        .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    }
    form.resetForm();
    this.clearForm(form);
  }

  clearForm(form: NgForm) {
    form.value.content = '';
  }


}
