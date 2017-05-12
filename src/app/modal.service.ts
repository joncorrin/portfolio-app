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
  getMessageModal() {
    this.messageModal = !this.messageModal;
    return this.messageModal;
  }
  getJobLeadModal() {
    this.jobLeadModal = !this.jobLeadModal;
    return this.jobLeadModal;
  }
  getFeedbackModal() {
    this.feedbackModal = !this.feedbackModal;
    return this.feedbackModal;
  }
  getContactModal() {
    this.contactModal = !this.contactModal;
    return this.contactModal;
  }

}
