import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
    constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    this.http.get<any[]>('http://localhost:3000/posts').subscribe(posts => {
      this.postSubject.next(posts)
    })
    return this.postSubject.asObservable()
  }
  createPost(postData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/posts', postData)
  }
  updatePost(postId: number, postData: any): Observable<any>{
    const url = `http://localhost:3000/posts/${postId}`
    return this.http.patch<any>(url, postData)
  }
}
