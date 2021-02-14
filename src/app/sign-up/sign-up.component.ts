import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public fb: FormBuilder, public service:UsersService, public router: Router) { }
  public userForm = this.fb.group({
    fullName:[''],
    email:[''],
    phone:['',[Validators.minLength(11),Validators.maxLength(11)] ],
    image:"../../assets/images/user.png",
    username:[''],
    password:[''],
    c_password:['']
  });
  public users=[];
  public errorMsg="";
  ngOnInit(): void {
  }
  chooseImage(){
    document.getElementById("imageInput").click()
  }
  uploadImage(image){
    console.log(image.target.files[0])
    let imageFile = image.target.files[0];
    let readFile = new FileReader;
    readFile.onload=()=>{
      let result = readFile.result
      console.log(typeof(readFile.result))
      this.userForm.controls['image'].setValue(result)
    }
    readFile.readAsDataURL(imageFile);
  }
  submitForm(){
    if(this.userForm.valid){
      console.log(this.userForm)
      this.users = this.service.retrieveUsers()
      let control = this.userForm.controls
      let userId = this.users.length
      let newUser = {userId: userId,name: control['fullName'].value,email:control['email'].value,phone:control['phone'].value,
      username:control['username'].value,password:control['password'].value,c_password:control['c_password'].value,image:control['image'].value}
      console.log(newUser)
      this.users.push(newUser)
      this.service.storeUser(this.users)
      this.errorMsg = "succesful"
      // this.userForm.reset();
      this.router.navigate([`../signIn`])
    }else{
      this.errorMsg = "unsuccesful"
      console.log("unsuccesful")
    }
    
  }
}
