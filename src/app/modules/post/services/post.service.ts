import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public postSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
    constructor(private http: HttpClient) {}

  getPosts(): Observable<void> {
   return   this.http.get<any[]>('http://localhost:3000/posts').pipe(map((posts ) => this.postSubject.next(posts)))
  }
  createPost(postData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/posts', postData)
  }
  updatePost(postId: number, postData: any): Observable<any>{
    const url = `http://localhost:3000/posts/${postId}`
    return this.http.patch<any>(url, postData)
  }
}
