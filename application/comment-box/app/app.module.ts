import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {CommentBoxComponent} from './comment-box-component/commentbox-component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,CommentBoxComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }