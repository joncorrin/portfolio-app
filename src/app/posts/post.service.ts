import { Post } from "./post.model";
import {Http, Headers, Response} from "@angular/http";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export  class PostService {
  private posts: Post[] = [];
  postIsEdited = new EventEmitter<Post>();
  productionUrl = 'https://portfoli-o.herokuapp.com';

  constructor(private http: Http) {};

  addPost(adminPost: Post) {
    const body = JSON.stringify(adminPost);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.productionUrl + '/post', body, { headers: headers })
      .map((response: Response) => {
        const result = response.json();
        const adminPost = new Post(result.obj.content, result.obj.date);
        this.posts.push(adminPost);
        return adminPost;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getPosts() {
    return this.http.get(this.productionUrl + '/post')
      .map((response: Response) => {
        const posts = response.json().obj;
        let transformedPosts: Post[] = [];
        for (let adminPost of posts) {
          transformedPosts.push( new Post(adminPost.content, adminPost.date));
        }
        this.posts = transformedPosts;
        return transformedPosts;
      })
      .catch((error: Response) => Observable.throw(error.json()));

  }

  editPost(adminPost: Post) {
    this.postIsEdited.emit(adminPost);
  }

  updatePost(adminPost: Post) {
    const body = JSON.stringify(adminPost);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch(this.productionUrl + '/post', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deletePost(adminPost: Post) {
    this.posts.splice(this.posts.indexOf(adminPost), 1);
    return this.http.delete(this.productionUrl + '/post')
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
