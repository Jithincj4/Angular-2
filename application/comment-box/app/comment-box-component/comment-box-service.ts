import { Injectable } from '@angular/core';
import {Comments} from "./commentbox-comments";

//@Injectable() specifies class is available to an injector for instantiation and an injector will display
// an error when trying to instantiate a class that is not marked as @Injectable()

@Injectable()

//CommentService exposes the getComments() method that returns the data
export class CommentService {
   getComments() {
      return Promise.resolve(Comments); // takes values from country.contacts typescript file
   }
}