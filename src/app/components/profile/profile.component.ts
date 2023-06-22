import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponseDto } from 'src/app/entities/user-response-dto';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { APIsService } from 'src/app/service/data/apis.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileDetails: UserResponseDto;
  userEmail: string | null;

  constructor(private apiService: APIsService, private authenticate: AuthenticationService,private router:Router) {
  }
  ngOnInit() {
    this.userEmail = localStorage.getItem('user');
    this.apiService.getByEmail(this.userEmail).subscribe((response) => {
      console.log(response);
      this.profileDetails = response;
    });
  }

  updateProfile(id:any){
    console.log(`Updating Id ${id}`);
    this.router.navigate(['edit',id]);
  }
}
