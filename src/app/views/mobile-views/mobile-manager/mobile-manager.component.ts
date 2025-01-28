import { Component } from '@angular/core';
import {AuthenticationPageComponent} from '../authentication-page/authentication-page.component';

@Component({
  selector: 'app-mobile-manager',
  imports: [
    AuthenticationPageComponent
  ],
  templateUrl: './mobile-manager.component.html',
  styleUrl: './mobile-manager.component.css'
})
export class MobileManagerComponent {

}
