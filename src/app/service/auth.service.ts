import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Login } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://interview.cerex.io/test/login';

  public tokenSubject: BehaviorSubject<string | null>;
  public currentToken: Observable<string | null>;

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<string | null>(null);
    this.currentToken = this.tokenSubject?.asObservable();
  }

  public get currentTokenValue(): string | null {
    return this.tokenSubject?.value;
  }

  login(data: Login): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
