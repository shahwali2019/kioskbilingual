import { Injectable } from '@angular/core';
import { Observable, using } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  /**
   * JSIN SERVER URL 
   */
  // baseUrl = environment.baseUrl;
  // listUserUrl: string = `${this.baseUrl}/list`;

  /**
   * JSON DB SERVE
   */
  baseUrl = `https://reqres.in/api`;
  testAppURL: string = 'assets/test.json';
  listUserUrl: string = `${this.baseUrl}/users`;
  constructor(
    private http: HttpClient
  ) { }

  querySearch(id:number):Observable<object>{
    return this.http.get(`${this.listUserUrl}/${id}`);
  }

  queryGetQueUser(id):Observable<object>{
   return this.http.get(`${this.listUserUrl}/${id}`)
  }

  queryTest():Observable<Object>{
    return this.http.get(this.testAppURL);
  }
}
