import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  retrieveUsers(){
    return JSON.parse(localStorage.getItem("newUser"));
  }
  storeUser(newUser){
    localStorage.setItem("newUser",JSON.stringify(newUser))
  }
  storeProfile(newProfile){
    localStorage.setItem("Profiles",JSON.stringify(newProfile))
  }
}
