import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/service/signin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = {
    username: '',
    password: ''
  };

  constructor(private signinService : SigninService) { }

  login(){
    this.signinService.login(this.loginForm);
  }
}
