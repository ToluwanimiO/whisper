import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { LoggedUserProfileComponent } from './logged-user-profile/logged-user-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"",component:NavBarComponent},
  {path:"signIn",component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"chats",component:ChatInterfaceComponent},
  {path:"loggedUserProfile",component:LoggedUserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
