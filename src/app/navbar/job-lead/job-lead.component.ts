import {Component, DoCheck, OnInit} from '@angular/core';
import {ModalService} from "../../modal.service";

@Component({
  selector: 'app-job-lead',
  templateUrl: './job-lead.component.html',
  styleUrls: ['./job-lead.component.css']
})
export class JobLeadComponent implements OnInit, DoCheck {
  modalVisible = false;

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.modalVisible = this.modalService.jobLeadModal;
  }

  toggleModal() {
    this.modalVisible = this.modalService.getJobLeadModal();
  }
}
