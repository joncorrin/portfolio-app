import {Component, DoCheck, OnInit} from '@angular/core';
import {ModalService} from "../../modal.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, DoCheck {
  //Modal initially set to not visible
  modalVisible = false;

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  //Check if modal value has changed for closing modal
  ngDoCheck() {
   this.modalVisible = this.modalService.messageModal;
  }
  //Closes modal by taking false value
  toggleModal() {
    this.modalVisible = this.modalService.getMessageModal();
  }

}
