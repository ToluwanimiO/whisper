import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public fb:FormBuilder,iconRegistry:MatIconRegistry,sanitizer:DomSanitizer,
    public service:UsersService, public router: Router) { 
    iconRegistry.addSvgIcon(
      'whisper-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/whisper-w-logo.svg')
    )
  }
  public signInForm=this.fb.group({
    username:[''],
    password:['']
  })
  public errorMsg="";
  ngOnInit(): void {
  }
  verify(){
      let username = this.signInForm.controls['username'].value;
      let password = this.signInForm.controls['password'].value
      if(this.service.retrieveUsers().filter(user=>user.username == username && user.password == password).length>0){
        this.errorMsg= "succesful"
        console.log("exists")
        let user = this.service.retrieveUsers().filter(user=>user.username == username && user.password == password)
        // let i = user[0].userId
        localStorage.setItem("user",JSON.stringify([user[0].username,user[0].image,user[0].userId]))
        this.router.navigate([`../chats`])
      }else{
        this.errorMsg= "unsuccesful"
        console.log("incorrect details")
      }    
  }
}
