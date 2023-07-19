import {Component, Input, OnInit} from '@angular/core';

import {PostService} from "../../services/post.service";
import {take} from "rxjs";
import {FormsModule} from "@angular/forms";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-posts',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, NgForOf]
})
export class PostListComponent implements OnInit{
  @Input() postData: any
  posts!: any[]
  editingPost: any = null

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe()
  }

  ngOnInit() {
    console.log(this.postService.postSubject)
    this.postService.postSubject.subscribe(posts => {
      this.posts = posts;

    })
  }
  createOrUpdatePost(postData: any){
    if(this.editingPost) {
      this.updatePost(postData)
    } else {
      this.createPost(postData)
    }
  }
  createPost(postData: any) {
    this.postService.createPost(postData).subscribe(createdPost => {
      this.posts.push(createdPost);
      this.postService.getPosts().pipe(take(1)).subscribe(currentPosts => {

      });
      this.editingPost = null;
    });
  }

  updatePost(postData: any) {
    const postId = this.editingPost.id;
    this.postService.updatePost(postId, postData).subscribe(updatedPost => {
      const postIndex = this.posts.findIndex(post => post.id === postId);
      if (postIndex !== -1) {
        this.posts[postIndex] = { ...this.posts[postIndex], ...updatedPost };
        this.postService.getPosts().pipe(take(1)).subscribe(currentPosts => {
          // const updatedPosts = currentPosts.map(post => {
          //   if (post.id === postId) {
          //     return { ...post, ...updatedPost };
          //   }
          //   return post;
          // });

        });
        this.editingPost = null;
      }
    });
  }
}
