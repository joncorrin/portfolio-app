import {Component, DoCheck, OnInit} from '@angular/core';
import {ModalService} from "../../modal.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, DoCheck {
  modalVisible = false;

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.modalVisible = this.modalService.feedbackModal;
  }

}
