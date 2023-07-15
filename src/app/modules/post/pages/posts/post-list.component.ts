import {Component, OnInit} from '@angular/core';

import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts!: any[]
  editingPost: any = null

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }
  createOrUpdatePost(postData: any){
    if(this.editingPost) {
      this.updatePost(this.editingPost.id, postData)
    } else {
      this.createPost(postData)
    }
  }
  createPost(postData: any){
    this.postService.createPost(postData).subscribe(() => {
      this.postService.getPosts().subscribe(posts => {
        this.posts = posts
      })
    })
  }
  updatePost(postId: number, postData: any){
    this.postService.updatePost(postId, postData).subscribe(() => {
      this.postService.getPosts().subscribe(posts=>{
        this.posts = posts
      })
    })
  }
}
