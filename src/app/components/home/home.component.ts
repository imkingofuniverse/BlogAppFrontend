import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient) { }

  getData() {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage or wherever it is stored
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    this.http.get('http://localhost:9091/users/2', { headers }).subscribe(
      (response: any) => {
        // Handle successful response
        console.log('Data:', response);
      },
      (error) => {
        // Handle error
        console.error('Error:', error);
      }
    );
  }
}
