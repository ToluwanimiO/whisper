import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-logged-user-profile',
  templateUrl: './logged-user-profile.component.html',
  styleUrls: ['./logged-user-profile.component.css']
})
export class LoggedUserProfileComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<LoggedUserProfileComponent>, public userService: UsersService) { }
  public image;
  public name;
  public user;
  public fullDetails;
  ngOnInit(): void {
    this.image = JSON.parse(localStorage.getItem("user"))[1]
    this.name = JSON.parse(localStorage.getItem("user"))[0]
    this.user = JSON.parse(localStorage.getItem("user"))[2]
    this.fullDetails = this.userService.retrieveUsers().filter(user=>user.userId == this.user);
    console.log(this.fullDetails)

  }
  close(){
    this.dialogRef.close();
  }
}
