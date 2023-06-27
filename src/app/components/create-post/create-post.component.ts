import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  post: Post = new Post();
  error: any;
  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePost() {
    this.postService.createPost(this.post).subscribe(data => {
      console.log(data);
      alert("Blog Posted Successfully");
      this.goToPostList();
    },
    (error) => {
      console.log(error);
      this.error=error;});
  }

  goToPostList() {
    this.router.navigate(['/postlist']);
  }

  onSubmit() {
    console.log(this.post);
    this.savePost();
  }

}
