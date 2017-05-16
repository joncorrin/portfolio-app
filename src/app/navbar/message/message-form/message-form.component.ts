import { Component, OnInit } from '@angular/core';
import {EmailTransporterService} from "../../email/email-transport.service";
import {Email} from "../../email/email.model";
import {NgForm} from "@angular/forms";
import {ModalService} from "../../../modal.service";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  email: Email;

  visitorEmail: string;
  name: string;
  subject: string;
  message: string;
  html: string;


  constructor(private emailTransportService: EmailTransporterService,
              private modalService: ModalService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.visitorEmail = form.value.visitorEmail;
    this.name = form.value.name;
    this.subject = 'Message from ' + this.name;
    this.message = form.value.message;
    this.html = '<h1 style="text-align: center">Message: </h1><br>' + '<p style="text-align: center">'+ '<strong>Name: </strong>' + this.name + '<br>' +
      '<strong>Email: </strong>' + this.visitorEmail + '<br>' + '<strong>Message: </strong>' + this.message;
    this.email = new Email(this.subject, this.html);
    this.emailTransportService.createEmail(this.email, 'message')
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.clearForm(form)
  }

  clearForm(form: NgForm) {
    this.visitorEmail = '';
    this.name = '';
    this.message = '';
    form.resetForm(form);
  }

  onRedirect() {
    setTimeout(() => {
      this.modalService.toggleMessageModal()
    }, 300);
  }


}
