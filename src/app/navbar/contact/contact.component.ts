import {Component, DoCheck, OnInit} from '@angular/core';
import {ModalService} from "../../modal.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, DoCheck {
  modalVisible = false;

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.modalVisible = this.modalService.contactModal;
  }

  toggleModal() {
    this.modalVisible = this.modalService.getContactModal();
  }

}
