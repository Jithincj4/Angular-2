import { Component,OnInit } from '@angular/core';
import {CommentService} from "./comment-box-service";
import {Comment} from "./comment";


@Component({
   selector: "comment-list",
   template: ` List of commenting peoples<br>
   <ul>
      <li *ngFor=" let comment of CommentArr"><div><span>{{ comment.name }}</span><br/><span>{{comment.comment}}</span></div></li>
   </ul>
   `,
   providers: [CommentService]
})

export class CommentBoxComponent implements OnInit {
   public CommentArr : Comment[];
   constructor(private _commentService: CommentService) {}

   getComments(){
      this._commentService.getComments().then((comments: Comment[]) => this.CommentArr = comments);
   }

ngOnInit():any{
   this.getComments();

}
}