import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { LoggedUserProfileComponent } from '../logged-user-profile/logged-user-profile.component';
import { MessageService } from '../services/message.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() userId:number;
  constructor(public service:UsersService, public msgService:MessageService, public router: Router, public dialog:MatDialog){ }
  public userList=[];
  public username;
  public image;
  public messages;
  public receiver;
  public loggedUserId;
  public otherUsersId;
  public recentMsg=[];
  public searchText;
  ngOnInit(): void {
    console.log(this.recentMsg)
    let new_userList = this.service.retrieveUsers().filter(users => users.userId != this.userId)    
    this.messages=this.msgService.retrieveMsg()
    this.username = JSON.parse(localStorage.getItem("user"))[0]
    this.image = JSON.parse(localStorage.getItem("user"))[1]
    this.loggedUserId = JSON.parse(localStorage.getItem("user"))[2]
    console.log(this.username) 
    this.userList = new_userList
    this.msgService.newMsg.subscribe(newMessage=>{ 
      this.recentMsg =[];  
      for (let i in new_userList){
        this.otherUsersId = new_userList[i].userId
        let messages=this.msgService.retrieveMsg().filter(message=>(message.senderId==this.userId||message.senderId==this.otherUsersId) && (message.receiverId==this.otherUsersId||message.receiverId==this.userId))
        // console.log(messages,new_userList[i].username)
        if(messages.length>0){
          this.recentMsg.push({recentMessage:messages[messages.length-1].message,receiverId:new_userList[i].userId})
          console.log(this.recentMsg)
          console.log(this.messages)
        }   
      }
      // let messages=this.msgService.retrieveMsg().filter(message=>(message.senderId==this.userId||message.senderId==this.receiver) && (message.receiverId==this.receiver||message.receiverId==this.userId))
      // console.log(messages)
      // if(messages.length>0){
      //   this.recentMsg = messages[messages.length-1].message
      //   console.log(this.recentMsg)
      // }      
    })
    // let userlength = new_userList.length
    // for (let index = 0; index < userlength; index++) {
    //   console.log(new_userList)
    //   this.userList.push(new_userList[index].username)   
    // }
  }
  viewMsgChat(recieverId){
    console.log(recieverId)
    this.receiver = recieverId
    this.msgService.retrieveReceiver(recieverId)
  }
  trackRecent(index,msg){
    console.log(index,msg)
    // if(msg.senderId==user.userId||msg.senderId==loggedUserId) && (msg.receiverId==user.userId||msg.receiverId==loggedUserId)
  }
  message(msg){
    console.log(msg)
  }
  viewProfile(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position={
      'top':'55px',
      'left':'100px'
    }
    dialogConfig.width = '260px';
    dialogConfig.height = '550px';
    this.dialog.open(LoggedUserProfileComponent,dialogConfig);
    
  }
}
