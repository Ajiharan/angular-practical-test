import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl = 'https://interview.cerex.io/test/profile';
  constructor(
    private http: HttpClient,
    private local: LocalStorageService,
    private auth: AuthService
  ) {}

  getProfile(): Observable<any> {
    const token = this.local.getToken() || this.auth.currentTokenValue;
    const reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.baseUrl, { headers: reqHeader });
  }
}
