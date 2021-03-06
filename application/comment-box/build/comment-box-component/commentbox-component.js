"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const comment_box_service_1 = require("./comment-box-service");
let CommentBoxComponent = class CommentBoxComponent {
    constructor(_commentService) {
        this._commentService = _commentService;
    }
    getComments() {
        this._commentService.getComments().then((comments) => this.CommentArr = comments);
    }
    ngOnInit() {
        this.getComments();
    }
};
CommentBoxComponent = __decorate([
    core_1.Component({
        selector: "comment-list",
        template: ` List of commenting peoples<br>
   <ul>
      <li *ngFor=" let comment of CommentArr"><div><span>{{ comment.name }}</span><br/><span>{{comment.comment}}</span></div></li>
   </ul>
   `,
        providers: [comment_box_service_1.CommentService]
    }),
    __metadata("design:paramtypes", [comment_box_service_1.CommentService])
], CommentBoxComponent);
exports.CommentBoxComponent = CommentBoxComponent;
//# sourceMappingURL=commentbox-component.js.map