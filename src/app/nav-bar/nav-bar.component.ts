import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(iconRegistry:MatIconRegistry, sanitizer:DomSanitizer) {
    iconRegistry.addSvgIcon(
      'whisper-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/whisper-w-logo.svg')
    )
  }

  ngOnInit(): void {
  }

}
