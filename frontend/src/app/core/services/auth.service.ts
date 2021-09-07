import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { first, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authUrl = 'localhost:8080/v1/accounts';

  private readonly loggedIn = new BehaviorSubject<boolean>(false);
  readonly loggedIn$ = this.loggedIn.asObservable();

  constructor(private readonly http: HttpClient) { }

  login(username: string, password: string) {
    this.http.post(this.authUrl, { username, password })
      .pipe(
        first(),
        catchError(() => {
          this.loggedIn.next(false);
          return of(null);
        })
      )
      .subscribe((token: any) => {
        if (token) {
          this.loggedIn.next(true);
          this.setAccessToken(token.access_token);
        }
      });
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token') || null;
  }

  setAccessToken(token: string | null) {

    if (token === null) {
      localStorage.removeItem('access_token');
      return;
    }

    localStorage.setItem('access_token', token);
  }
}
