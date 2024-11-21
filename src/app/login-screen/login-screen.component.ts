import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss'
})
export class LoginScreenComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      passwd: new FormControl('', Validators.required),
      saveUser: new FormControl(false),
    })
  }

}
