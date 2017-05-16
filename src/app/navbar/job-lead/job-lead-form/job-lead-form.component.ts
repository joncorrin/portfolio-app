import { Component, OnInit } from '@angular/core';
import {Email} from "../../email/email.model";
import {EmailTransporterService} from "../../email/email-transport.service";
import {NgForm} from "@angular/forms";
import {ModalService} from "../../../modal.service";

@Component({
  selector: 'app-job-lead-form',
  templateUrl: './job-lead-form.component.html',
  styleUrls: ['./job-lead-form.component.css']
})
export class JobLeadFormComponent implements OnInit {

  email: Email;

  visitorEmail: string;
  name: string;
  refName: string;
  job: string;
  location: string;
  subject: string;
  jobType: string;
  description: string;
  html: string;


  constructor(private emailTransportService: EmailTransporterService,
              private modalService: ModalService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.visitorEmail = form.value.visitorEmail;
    this.name = form.value.name;
    this.refName = form.value.refName;
    this.job = form.value.job;
    this.location = form.value.location;
    this.jobType = form.value.jobType;
    this.description = form.value.description;
    this.subject = 'Job lead from ' + this.name;
    this.html = '<h1 style="text-align: center">Job Lead: </h1><br>' + '<p style="text-align: center">'+ '<strong>Name: </strong>' + this.name + '<br>' +
      '<strong>Email: </strong>' + this.visitorEmail + '<br>' + '<strong>Reference: </strong>' + this.refName + '<br>' +
      '<strong>Job: </strong>' + this.job + '<br>' + '<strong>Location: </strong>' + this.location + '<br>' +
      '<strong>Job Type:  </strong>' + this.jobType + '<br>' + '<strong>Description: </strong>'  + this.description +'</p>';
    this.email = new Email(this.subject, this.html);
    this.emailTransportService.createEmail(this.email, 'lead')
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.clearForm(form)
  }

  clearForm(form: NgForm) {
    this.visitorEmail = '';
    this.name = '';
    this.refName = '';
    this.job = '';
    this.location = '';
    this.jobType = '';
    this.description = '';
    form.resetForm(form);
  }

  onRedirect() {
    setTimeout(() => {
      this.modalService.toggleLeadModal()
    }, 300);
  }
}
