import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from '../services/message.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ContactInfoComponent>,public msgService:MessageService, public userService:UsersService) { }
  public image;
  public name;
  public number;
  ngOnInit(): void {
    this.msgService.receiver.subscribe(clickedUser=>{
      let receiver = clickedUser
      let userDetails = this.userService.retrieveUsers().filter(user=>user.userId == receiver)
      this.image = userDetails[0].image
      this.name = userDetails[0].username
      this.number = userDetails[0].phone
    })
  }
  close(){
    this.dialogRef.close();
  }
}
