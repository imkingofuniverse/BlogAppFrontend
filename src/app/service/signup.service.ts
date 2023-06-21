import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterComponent } from '../components/singup/register.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient,private router: Router) { }

  register(userInput:any) {
    this.http.post('http://localhost:9091/api/v1/auth/signup', userInput).subscribe(
      (response) => {
        // Handle successful registration
        console.log('Registration successful!', response);
        this.router.navigate(['/signin']);
      },
      (error) => {
        // Handle registration error
        console.error('Registration error:', error);
      }
    );
  }
}
