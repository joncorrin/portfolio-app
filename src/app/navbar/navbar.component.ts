import {Component, DoCheck, OnInit} from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  //Modals not visible initially
  messageModalVisible = false;
  jobLeadModalVisible = false;
  feedbackModalVisible = false;
  contactModalVisible = false;
  //Menu not visible initially
  menuToggler = false;

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    //Checks if modal boolean changed to prepare for next click to open
    this.messageModalVisible = this.modalService.messageModal;
    this.jobLeadModalVisible = this.modalService.jobLeadModal;
    this.contactModalVisible = this.modalService.contactModal;
    this.feedbackModalVisible = this.modalService.feedbackModal;
  }

  // Toggle side menu
  toggleMenu() {
    this.menuToggler = !this.menuToggler;
  }

}
