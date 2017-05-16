import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {EmailTransporterService} from "../../email-transport.service";
import {Email} from "../../email.model";
import {ModalService} from "../../../modal.service";

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  email: Email;

  connotation: string;
  visitorEmail: string;
  name: string;
  feedback: string;
  subject: string;
  html: string;


  constructor(private emailTransportService: EmailTransporterService,
              private modalService: ModalService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.visitorEmail = form.value.visitorEmail;
    this.name = form.value.name;
    this.feedback = form.value.feedback;
    this.connotation = form.value.connotation;
    this.subject = this.connotation + ' feedback from ' + this.name;
    this.html = '<h1 style="text-align: center">Feedback: </h1><br>' + '<p style="text-align: center">'+ '<strong>Name: </strong>' + this.name + '<br>' +
      '<strong>Email: </strong>' + this.visitorEmail + '<br>' + '<strong>Feedback: </strong>' + this.feedback;
    this.email = new Email(this.subject, this.html);
    this.emailTransportService.createEmail(this.email, 'feedback')
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.clearForm(form)
  }

  clearForm(form: NgForm) {
    this.visitorEmail = '';
    this.name = '';
    this.feedback = '';
    this.connotation = '';
    form.resetForm(form);
  }

  onRedirect() {
    setTimeout(() => {
      this.modalService.toggleFeedbackModal()
      }, 300);
  }
}
