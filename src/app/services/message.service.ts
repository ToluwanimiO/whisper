import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public receiver = new BehaviorSubject("");
  public newMsg = new BehaviorSubject("");
  constructor() { }
  retrieveMsg(){
    return JSON.parse(localStorage.getItem("Messages"))
  }
  storeMsg(message){
    localStorage.setItem("Messages",JSON.stringify(message))
    this.newMsg.next("newMessage")
  }
  retrieveReceiver(id){
    this.receiver.next(id)
  }
}
