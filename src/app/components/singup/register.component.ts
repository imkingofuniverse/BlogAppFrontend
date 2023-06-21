import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = {
    first_name:'',
    last_name:'',
    email: '',
    password: ""
  };

  constructor(private signup:SignupService) { }
  register(){
    this.signup.register(this.registerForm);
  }
  
  
}
