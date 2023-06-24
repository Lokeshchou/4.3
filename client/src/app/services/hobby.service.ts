import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hobby } from '../models/hobby.model';

const baseUrl = 'http://localhost:8080/hobby';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(baseUrl);
  }

  get(id: any): Observable<Hobby> {
    return this.http.get<Hobby>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(`${baseUrl}?title=${title}`);
  }
}
