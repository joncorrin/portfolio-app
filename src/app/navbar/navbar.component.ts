import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuToggler = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuToggler = !this.menuToggler;
    console.log(this.menuToggler)
  }

}
