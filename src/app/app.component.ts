import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MobileViewsModule} from './views/mobile-views/mobile-views.module';
import {DesktopViewsModule} from './views/desktop-views/desktop-views.module';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    MobileViewsModule,
    DesktopViewsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // Variable to track if viewer is on mobile or desktop
  isOnMobile: boolean = false;

  // View initializer to run on appear
  ngOnInit() {
  this.checkScreenSize();
  }

  // Check screen size and update isMobileView
  checkScreenSize() {
    this.isOnMobile = window.innerWidth <= 768;
  }
}
