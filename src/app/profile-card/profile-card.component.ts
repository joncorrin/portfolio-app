import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  profileImgUrl = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA0UAAAAJGNiNGIxODA3LTAzZWEtNDdkNi04OTdkLWE0OWViMTIyYTkwYQ.jpg';
  coverImgUrl = 'https://s-media-cache-ak0.pinimg.com/736x/dc/9d/b4/dc9db40a92c586ab46236cf6d66aa230.jpg'
  adminName = 'Jon Corrin';
  adminBio = 'Full stack developer looking for full-time positions';
  constructor() { }

  ngOnInit() {
  }

}
