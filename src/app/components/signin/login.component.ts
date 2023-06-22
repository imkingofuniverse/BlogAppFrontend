import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { APIsService } from 'src/app/service/data/apis.service';


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
  error: any;
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  constructor(private signinService: APIsService, private router: Router,public authenticate:AuthenticationService) { }

  login() {
    this.signinService.login(this.loginForm).subscribe(
      (response: any) => {
        localStorage.setItem('user',this.loginForm.username);
        // Handle successful login
        console.log('Login successful!', response);
        // Store the JWT token in local storage or a cookie
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
     
        // Use Angular's Router module for navigation
      },
      (error) => {
        // Handle login error
        console.error('Login error:', error);
        this.invalidLogin = true;
        this.error = error;
      }
    );
  }
}
