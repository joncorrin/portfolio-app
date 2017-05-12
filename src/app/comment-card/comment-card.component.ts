import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  profileImgUrl = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA0UAAAAJGNiNGIxODA3LTAzZWEtNDdkNi04OTdkLWE0OWViMTIyYTkwYQ.jpg';
  adminName = 'Jon Corrin';
  vote: boolean;

  constructor() { }

  ngOnInit() {
  }

  upVote() {
    this.vote = true;
  }

  downVote() {
    this.vote = false;
  }

}
