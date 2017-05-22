import { Component,OnInit } from '@angular/core';
import {CommentService} from "./comment-box-service";
import {Comment} from "./comment";


@Component({
   selector: "comment-list",
   template: ` List of commenting peoples<br>
   <ul>
      <li *ngFor="#comment of Comments">{{ comment.name }}</li>
   </ul>
   `,
   providers: [CommentService]
})

export class CommentBoxComponent implements OnInit {
   public comments : Comment[];
   constructor(private _commentService: CommentService) {}

   getComments(){
      this._commentService.getComments().then((comments: Comment[]) => this.comments = comments);
   }

ngOnInit():any{
   this.getComments();
}
}