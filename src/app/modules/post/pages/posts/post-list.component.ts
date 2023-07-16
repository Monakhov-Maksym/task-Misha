import {Component, Input, OnInit} from '@angular/core';

import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  @Input() postData: any
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
      this.updatePost(postData)
    } else {
      this.createPost(postData)
    }
  }
  createPost(postData: any) {
    this.postService.createPost(postData).subscribe(createdPost => {
      this.posts.push(createdPost)
      this.editingPost = null
    })
  }

  updatePost(postData: any) {
    const postId = this.editingPost.id
    this.postService.updatePost(postId, postData).subscribe(updatedPost => {
      const postIndex = this.posts.findIndex(post => post.id === postId)
      if (postIndex !== -1) {
        this.posts[postIndex] = { ...this.posts[postIndex], ...updatedPost }
        this.editingPost = null
      }
    })
  }
}
