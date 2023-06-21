import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/signin/login.component';
import { RegisterComponent } from './components/singup/register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: '', component: RegisterComponent },

  { path: 'signup', component: RegisterComponent },
  { path: 'home', component: HomeComponent }
  // { path: '', component: AppComponent } // Add this line to map root URL to AppComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
