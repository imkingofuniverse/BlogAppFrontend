import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient, private router: Router) { }

  login(UserInputForLogin:any) {
    this.http.post('api/v1/auth/login', UserInputForLogin).subscribe(
      (response: any) => {
        // Handle successful login
        console.log('Login successful!', response);
        // Store the JWT token in local storage or a cookie
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']); 
        // Use Angular's Router module for navigation
      },
      (error) => {
        // Handle login error
        console.error('Login error:', error);
      }
    );
  }
}
