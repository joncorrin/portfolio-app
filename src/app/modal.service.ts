import {Injectable} from "@angular/core";

@Injectable()
export class ModalService {
  //Modal values initially false for not visible
  messageModal: boolean = false;
  jobLeadModal: boolean = false;
  feedbackModal: boolean = false;
  contactModal: boolean = false;


  constructor() {}

  //Sends modal visible boolean to each modal component and nav
  toggleMessageModal() {
    this.messageModal = !this.messageModal;
  }
  toggleLeadModal() {
    this.jobLeadModal = !this.jobLeadModal;
  }
  toggleFeedbackModal() {
    this.feedbackModal = !this.feedbackModal;
  }
  toggleContactModal() {
    this.contactModal = !this.contactModal;
  }

}
