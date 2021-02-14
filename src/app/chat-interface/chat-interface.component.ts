import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent implements OnInit {

  constructor(public act_route:ActivatedRoute,iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'whisper-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/whisper-w-logo.svg')
    )
  }
  public userId;
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem("user"))[2]
  }

}
