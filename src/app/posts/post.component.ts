import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "./post.service";
import {Post} from "./post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  profileImgUrl = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA0UAAAAJGNiNGIxODA3LTAzZWEtNDdkNi04OTdkLWE0OWViMTIyYTkwYQ.jpg';
  adminName = 'Jon Corrin';
  adminBio = 'Full stack developer looking for full-time positions';
  liked = false;
  posts: Post[];
  adminPost: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
  }

  onEdit() {
    this.postService.editPost(this.adminPost);
  }

  onDelete() {
    this.postService.deletePost(this.adminPost)
      .subscribe(
        result => console.log(result)
      );
  }

  toggleLike() {
    this.liked = !this.liked;
  }

}
