import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;

  //Remove later
  layout: any;

  constructor(private http: HttpClient) {
  }

  signIn(user: string, password: string) {
    const url = `${environment.apiServer}/login`;
    return this.http.post<any>(url, { user, password })
      .pipe(map(data => {
        if (data && data.token) {
          data.user = user;
          this.setToken(data);
        }
        return data;
      }))
  }

  signOut(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.token = null;
  }

  getUser() {
    const data: any = this.getToken();
    if (data)
      return data.user;
  }

  getName() {
    const data: any = this.getToken();
    if (data)
      return data.result;
  }

  getToken() {
    if (this.token) {
      return this.token;
    }
    else {
      if (localStorage.getItem('currentUser')) {
        this.token = JSON.parse(localStorage.getItem('currentUser'));
        return this.token;
      }
      return null;
    }
  }

  setToken(token: any) {
    const expiration = new Date().getTime() + 3600000;
    token.expirationTime = expiration;
    this.token = token;
    localStorage.setItem('currentUser', JSON.stringify(token));

    //Remove later
    this.layout.setUser(token.result);
  }

  // Remove later
  setLayout(layout: any) {
    this.layout = layout;
  }
}
