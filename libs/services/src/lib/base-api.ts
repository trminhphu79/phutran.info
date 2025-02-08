import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type BaseResponse<T> = {
  data: T;
  message: string;
};

@Injectable({
  providedIn: 'root',
})
export class BaseApi {
  protected baseUrl = 'https://api.phutran.info.vn/';
  // protected baseUrl = 'http://localhost:3000';
  protected http: HttpClient = inject(HttpClient);

  getItem<T>(id: string, url: string): Observable<BaseResponse<T>> {
    return this.http.get<BaseResponse<T>>(`${url}/${id}`);
  }

  getItems<T>(url: string): Observable<BaseResponse<T[]>> {
    return this.http.get<BaseResponse<T[]>>(`${url}`);
  }

  createItem<T>(item: T, url: string): Observable<BaseResponse<T>> {
    return this.http.post<BaseResponse<T>>(`${url}`, item);
  }

  updateItem<T>(id: string, item: T, url: string): Observable<BaseResponse<T>> {
    return this.http.put<BaseResponse<T>>(`${url}/${id}`, item);
  }

  deleteItem<T>(id: string, url: string): Observable<BaseResponse<T>> {
    return this.http.delete<BaseResponse<T>>(`${url}/${id}`);
  }
}
