import { Blog } from '@tmp/type';
import { Injectable } from '@angular/core';
import { BaseApi, BaseResponse } from './base-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends BaseApi {
  constructor() {
    super();
  }

  getBlog(id: string): Observable<BaseResponse<Blog>> {
    const url = `${this.baseUrl}/blogs`;
    console.log('getBlog url: ', url);
    return this.getItem<Blog>(id, url);
  }

  getBlogs(): Observable<BaseResponse<Blog[]>> {
    const url = `${this.baseUrl}/blogs`;
    return this.getItems<Blog>(url);
  }

  createBlog(blog: Blog): Observable<BaseResponse<Blog>> {
    const url = `${this.baseUrl}/blogs`;
    return this.createItem<Blog>(blog, url);
  }

  updateBlog(id: string, blog: Blog): Observable<BaseResponse<Blog>> {
    const url = `${this.baseUrl}/blogs/${id}`;
    return this.updateItem<Blog>(id, blog, url);
  }

  deleteBlog(id: string): Observable<BaseResponse<Blog>> {
    const url = `${this.baseUrl}/blogs/${id}`;
    return this.deleteItem<Blog>(id, url);
  }
}
