import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://interview.cerex.io/test/login';
  constructor(private http: HttpClient) {}

  login(data: Login): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
