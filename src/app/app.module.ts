import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PostComponent } from './post/post.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { MessageComponent } from './navbar/message/message.component';
import { JobLeadComponent } from './navbar/job-lead/job-lead.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { FeedbackComponent } from './navbar/feedback/feedback.component';
import {ModalService} from "./modal.service";
import {AppRoutingModule} from "./app-routing.module";
import { PostFormComponent } from './post/post-form/post-form.component';
import { PostModalComponent } from './post/post-modal/post-modal.component';

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
    PostModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
