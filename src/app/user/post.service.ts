import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post.model'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  public getPost(): Observable<Array<PostModel>>{
    return this.http
    .get<Array<PostModel>>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      map((posts) => posts.map(item => new PostModel(item))));
    // return new UserModel('Dima', 33);
  }

  public addPost(body: any): Observable<PostModel>{
    return this.http
    .post<PostModel>('https://jsonplaceholder.typicode.com/posts', 
    body);
    // return new UserModel('Dima', 33);
  }
}
