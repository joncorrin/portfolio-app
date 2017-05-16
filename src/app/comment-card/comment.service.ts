import { Comment } from "./comment.model";
import {Http, Headers, Response} from "@angular/http";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export  class CommentService {
  private comments: Comment[] = [];
  commentIsEdited = new EventEmitter<Comment>();
  editing = false;
  productionUrl = 'http://portfoli-o.herokuapp.com';

  constructor(private http: Http) {};

  addComment(comment: Comment) {
    console.log(comment.content + ' ' + comment.date + ' From service');
    this.comments.push(comment);
    const body = JSON.stringify(comment);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/comment', body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getComments() {
    return this.http.get(this.productionUrl + '/comment')
      .map((response: Response) => {
        const comments = response.json().obj;
        let transformedComments: Comment[] = [];
        for (let comment of comments) {
          transformedComments.push(new Comment(comment.content, comment.date))
        }
        this.comments = transformedComments;
        return transformedComments;
      })
      .catch((error: Response) => Observable.throw(error.json()));

  }

  editPost(comment: Comment) {
    this.editing = true;
    this.commentIsEdited.emit(comment);
  }

  updatePost(comment: Comment) {

  }

  deletePost(comment: Comment) {

  }
}
