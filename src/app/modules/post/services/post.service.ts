import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
    constructor(private http: HttpClient) {}

  get Posts(): Observable<any[]> {
    this.http.get<any[]>('http://localhost:3000/posts').subscribe(posts => {
      this.postSubject.next(posts)
    })
    return this.postSubject.asObservable()
  }
}
