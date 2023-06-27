import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/entities/comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent {


  /*
  id: number;
  //comment: Comment[];
  //comment: Comment = new Comment();
  comment: any[]=[];

  constructor(private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // this.commentService.createComment(this.id).subscribe(data => {
    //   this.comment = data;
    // }, error => console.log(error));
  }

  savePost() {
    this.commentService.createComment( this.comment , this.id).subscribe(data => {
      console.log(data);
      alert("Blog Posted Successfully");
      this.goToCommentList();
    },
      error => console.log(error));
  }

  onSubmit() {
    //this.customerService.updateCustomer(this.id, this.customer).subscribe(data => 
    {
      this.goToCommentList();
    }
      //, error => console.log(error));
  }

  goToCommentList() {
    this.router.navigate(['/viewcomment/:id']);
  } */

  id: number
  comment: any = new Comment();
  error: any;
  //comment: any;
  constructor(private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

  }

  saveComment() {
    this.commentService.createComment(this.comment, this.id).subscribe(data => {
      console.log(data);
      alert("Comment Posted Successfully");
      this.goToCommentList();
    },
      (error) => {
      console.log(error);
      this.error=error;});
  }

  goToCommentList() {
    this.router.navigate(['/viewcomment',this.id]);
  }

  onSubmit() {
    console.log(this.comment);
    this.saveComment();
  }



}
