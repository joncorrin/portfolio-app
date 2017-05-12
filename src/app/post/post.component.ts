import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  toggleLike() {
    this.liked = !this.liked;
  }

}
