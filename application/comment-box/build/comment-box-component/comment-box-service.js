"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var commentbox_comments_1 = require("./commentbox-comments");
//@Injectable() specifies class is available to an injector for instantiation and an injector will display an error when trying to instantiate a class that is not marked as @Injectable()
var CommentService = (function () {
    //CountryService exposes the getContacts() method that returns the data
    function CommentService() {
    }
    CommentService.prototype.getComments = function () {
        return Promise.resolve(commentbox_comments_1.Comments); // takes values from country.contacts typescript file
    };
    return CommentService;
}());
CommentService = __decorate([
    core_1.Injectable()
    //CountryService exposes the getContacts() method that returns the data
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment-box-service.js.map