import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { PasswordDirective } from './directives/password.directive';
import { UniqueUserDirective } from './directives/unique-user.directive';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { LoggedUserProfileComponent } from './logged-user-profile/logged-user-profile.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { from } from 'rxjs';
import { MessageFilterPipe } from './pipes/message-filter.pipe';
import { ContactFilterPipe } from './pipes/contact-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    SignUpComponent,
    EmailValidatorDirective,
    PasswordDirective,
    UniqueUserDirective,
    UsersComponent,
    MessagesComponent,
    ChatInterfaceComponent,
    LoggedUserProfileComponent,
    ContactInfoComponent,
    MessageFilterPipe,
    ContactFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    LoggedUserProfileComponent,
    ContactInfoComponent
  ]
})
export class AppModule { }
