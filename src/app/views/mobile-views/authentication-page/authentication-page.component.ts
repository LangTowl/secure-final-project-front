import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-authentication-page',
  imports: [
    FormsModule
  ],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.css'
})
export class AuthenticationPageComponent {
  username: String = '';
  password: String = '';

  signIn() {
    console.log("Sign in button pressed: " + this.username )
  }
}
