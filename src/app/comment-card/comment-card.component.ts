import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CommentService} from "./comment.service";
import { Comment } from "./comment.model";

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  profileImgUrl = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA0UAAAAJGNiNGIxODA3LTAzZWEtNDdkNi04OTdkLWE0OWViMTIyYTkwYQ.jpg';
  adminName = 'Jon Corrin';
  vote: boolean;
  date: Date;
  comment: Comment;
  content: string;
  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComments()
      .subscribe(
        (comments: Comment[]) =>{
          this.comments = comments;
        }
      );
  }

  onSubmit(form: NgForm){
    this.content = form.value.content;
    this.date = new Date();
    this.comment = new Comment(this.content, this.date);
    console.log(this.content + ' ' + this.date + ' ' + this.comment);
    this.commentService.addComment(this.comment)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    form.resetForm();
    this.clearForm(form);
  }

  clearForm(form: NgForm) {
    form.value.content = '';
  }

  upVote() {
    this.vote = true;
  }

  downVote() {
    this.vote = false;
  }

}
