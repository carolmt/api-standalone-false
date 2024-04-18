import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  URL_BASE = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.URL_BASE);
  }

  createPost(post: Post) {
    return this.http.post(this.URL_BASE, post)
  }

  updatePost(post: Post) {
    return this.http.put(this.URL_BASE + '/' + post.userId, post);
  }

  deletePost(id: number) {
    return this.http.delete(this.URL_BASE + '/' +id);
  }
}
