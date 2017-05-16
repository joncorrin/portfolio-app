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
  productionUrl = 'https://portfoli-o.herokuapp.com';

  constructor(private http: Http) {};

  addComment(comment: Comment) {
    const body = JSON.stringify(comment);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.productionUrl + '/comment' , body, { headers: headers })
      .map((response: Response) => {
        const result = response.json();
        const comment = new Comment(result.obj.content, result.obj.date, result.obj._id);
        this.comments.push(comment);
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getComments() {
    return this.http.get(this.productionUrl + '/comment')
      .map((response: Response) => {
        const comments = response.json().obj;
        let transformedComments: Comment[] = [];
        for (let comment of comments) {
          transformedComments.push(new Comment(comment.content, comment.date, comment._id));
        }
        this.comments = transformedComments;
        return transformedComments;
      })
      .catch((error: Response) => Observable.throw(error.json()));

  }

  deleteComment(comment: Comment) {
    this.comments.splice(this.comments.indexOf(comment), 1);
    return this.http.delete(this.productionUrl + comment.commentId)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
