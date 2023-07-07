import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './modules/post/pages/post/post.component';
import { PostsComponent } from './modules/post/pages/posts/posts.component';
import { ManagementComponent } from './modules/post/pages/management/management.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
