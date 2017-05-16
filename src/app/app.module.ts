import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PostComponent } from './posts/post.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { MessageComponent } from './navbar/message/message.component';
import { JobLeadComponent } from './navbar/job-lead/job-lead.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { FeedbackComponent } from './navbar/feedback/feedback.component';
import {ModalService} from "./modal.service";
import {AppRoutingModule} from "./app-routing.module";
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostModalComponent } from './posts/post-modal/post-modal.component';
import {PostService} from "./posts/post.service";
import {CommentService} from "./comment-card/comment.service";
import {EmailTransporterService} from "./navbar/email-transport.service";
import { MessageFormComponent } from './navbar/message/message-form/message-form.component';
import { JobLeadFormComponent } from './navbar/job-lead/job-lead-form/job-lead-form.component';
import { FeedbackFormComponent } from './navbar/feedback/feedback-form/feedback-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileCardComponent,
    PostComponent,
    CommentCardComponent,
    MessageComponent,
    JobLeadComponent,
    ContactComponent,
    FeedbackComponent,
    PostFormComponent,
    PostModalComponent,
    MessageFormComponent,
    JobLeadFormComponent,
    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ModalService,
    PostService,
    CommentService,
    EmailTransporterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
