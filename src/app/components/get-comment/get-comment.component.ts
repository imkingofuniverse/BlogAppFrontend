import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/entities/comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-get-comment',
  templateUrl: './get-comment.component.html',
  styleUrls: ['./get-comment.component.css']
})
export class GetCommentComponent {

  id: number;
  comments: any[]=[];
  constructor(private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.commentService.getCommentsByPostId(this.id).subscribe( (data) => {
      console.log(data);
      this.comments = data;
      console.log(data);
    },
    (error) => console.log(error));
  }

  

  goToPostList() {
    this.router.navigate(['/postlist']);
  }

}
