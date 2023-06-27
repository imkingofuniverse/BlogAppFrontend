import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/signin/login.component';
import { RegisterComponent } from './components/singup/register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { GetCommentComponent } from './components/get-comment/get-comment.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { UpdateCommentComponent } from './components/update-comment/update-comment.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: '', component: RegisterComponent },

  { path: 'signup', component: RegisterComponent },
  { path: 'postlist', component: PostListComponent },
  { path: 'createpost', component: CreatePostComponent },
  { path: 'updatepost/:id', component: UpdatePostComponent },
  { path: 'createcomment/:id', component: CreateCommentComponent },
  { path: 'updatecomment/:id1/:id2', component: UpdateCommentComponent },
  { path: 'viewcomment/:id', component: GetCommentComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PagenotfoundComponent }
  // { path: '', component: AppComponent } // Add this line to map root URL to AppComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
