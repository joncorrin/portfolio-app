import { Post } from "./post.model";
import {Http, Headers, Response} from "@angular/http";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export  class PostService {
  private posts: Post[] = [];
  postIsEdited = new EventEmitter<Post>();
  editing = false;
  productionUrl = 'http://portfoli-o.herokuapp.com';

  constructor(private http: Http) {};

  addPost(adminPost: Post) {
    console.log(adminPost.content + ' ' + adminPost.date + ' From service');
    this.posts.push(adminPost);
    const body = JSON.stringify(adminPost);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8080/post', body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getPosts() {
    return this.http.get(this.productionUrl + '/post')
      .map((response: Response) => {
        const posts = response.json().obj;
        let transformedPosts: Post[] = [];
        for (let adminPost of posts) {
          transformedPosts.push(new Post(adminPost.content, adminPost.date))
        }
        this.posts = transformedPosts;
        return transformedPosts;
      })
      .catch((error: Response) => Observable.throw(error.json()));

  }

  editPost(adminPost: Post) {
    this.editing = true;
    this.postIsEdited.emit(adminPost);
  }

  updatePost(adminPost: Post) {

  }

  deletePost(post: Post) {

  }
}
