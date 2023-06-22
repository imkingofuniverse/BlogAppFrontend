import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponseDto } from 'src/app/entities/user-response-dto';

@Injectable({
  providedIn: 'root'
})
export class APIsService {

  constructor(private http: HttpClient,private router: Router) { }
  register(userInput:any) {
    return this.http.post('http://localhost:9091/user/auth/signup', userInput)
  }
  login(UserInputForLogin:any) {
    return this.http.post('http://localhost:9091/user/auth/login', UserInputForLogin)
  }
  getByEmail(username:any){
    return this.http.get<UserResponseDto>(`http://localhost:9091/users/by-email/${username}`)
  }
}
