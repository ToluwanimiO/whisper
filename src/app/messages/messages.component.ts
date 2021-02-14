import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { MessageService } from '../services/message.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // @ViewChild('scrollDiv') private scrollBottom: ElementRef;
  @Input() userId;
  constructor(public msgService: MessageService,public userService: UsersService, public dialog: MatDialog) { }
  public currentMessage;
  public receiverId;
  public message=[];
  public username;
  public displayedMsg;
  public displayUsername;
  public time = new Date();
  public image;
  public searchText;
  ngOnInit(): void {
    // console.log(document.getElementById('scrollDiv').scrollHeight )
    // window.scrollTo(0,document.getElementById('scrollDiv').scrollHeight);
    // document.getElementById('scrollDiv').scrollTop = document.getElementById('scrollDiv').scrollHeight

    // this.scrollToBottom();
    // <script> 
    //     $(document).ready(function() { 
    //         $("button").click(function() { 
    //             $(document).scrollTop($(document).height()); 
    //         }); 
    //     }); 
    // </script> 
    this.displayUsername = "delay";
    this.message = this.msgService.retrieveMsg()
    this.msgService.receiver.subscribe(recieverId=>{
      this.receiverId = recieverId;
      let clickedUser = this.userService.retrieveUsers().filter(user => user.userId === this.receiverId)
      if(clickedUser.length>0){     
        this.username = clickedUser[0].username
        this.image = clickedUser[0].image
        this.displayUsername = "display";
      }
      this.msgService.newMsg.subscribe(alert=>{
        console.log(alert)
        this.displayedMsg=this.msgService.retrieveMsg().filter(message=>(message.senderId==this.userId||message.senderId==this.receiverId) && (message.receiverId==this.receiverId||message.receiverId==this.userId))
        // console.log(this.displayedMsg)
        // console.log(this.displayedMsg[this.displayedMsg.length-1].message)
      })

    })
    
   
  }
  // ngAfterViewChecked():void{
  //   this.scrollToBottom()
  // }
  sendMsg(){
    console.log(this.time.toLocaleTimeString())
    this.message.push({senderId:this.userId,receiverId:this.receiverId,message:this.currentMessage,time:this.time.toLocaleTimeString()})
    this.msgService.storeMsg(this.message)
    this.currentMessage=""
  }
  viewContact(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position ={
      'top':'55px',
      'right':'100px'
    }
    dialogConfig.width = '260px';
    dialogConfig.height = '550px';
    this.dialog.open(ContactInfoComponent,dialogConfig)
  }
  testSend(key){
    if(key.keyCode == 13){
      this.sendMsg();
    }
  }
  // scrollToBottom(){
  //   this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
  // }
}
