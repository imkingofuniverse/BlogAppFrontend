import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/signin/login.component';
import { RegisterComponent } from './components/singup/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { GetCommentComponent } from './components/get-comment/get-comment.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { UpdateCommentComponent } from './components/update-comment/update-comment.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    PostListComponent,
    CreatePostComponent,
    GetCommentComponent,
    CreateCommentComponent,
    UpdatePostComponent,
    UpdateCommentComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
