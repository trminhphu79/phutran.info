import { Injectable } from '@angular/core';
import { BaseApi, BaseResponse } from './base-api';
import { Observable } from 'rxjs';

export type Blog = {
  id: string;
  title: string;
  content: string;
};

@Injectable({
  providedIn: 'root',
})
export class BlogService extends BaseApi {
  constructor() {
    super();
  }

  getBlog(id: string): Observable<BaseResponse<Blog>> {
    const url = `${this.baseUrl}/blog/${id}`;
    return this.getItem<Blog>(id, url);
  }

  getBlogs(): Observable<BaseResponse<Blog[]>> {
    const url = `${this.baseUrl}/blog`;
    return this.getItems<Blog>(url);
  }

  createBlog(blog: Blog): Observable<BaseResponse<Blog>> {
    const url = `${this.baseUrl}/blog`;
    return this.createItem<Blog>(blog, url);
  }

  updateBlog(id: string, blog: Blog): Observable<BaseResponse<Blog>> {
    const url = `${this.baseUrl}/blog/${id}`;
    return this.updateItem<Blog>(id, blog, url);
  }

  deleteBlog(id: string): Observable<BaseResponse<Blog>> {
    const url = `${this.baseUrl}/blog/${id}`;
    return this.deleteItem<Blog>(id, url);
  }
}
