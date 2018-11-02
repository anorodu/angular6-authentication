import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class AuthenticationService {
  static AUTH_TOKEN = 'oauth/token';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    // return this.http.post<any>(environment.endpoint + AuthenticationService.AUTH_TOKEN, {username, password})
    console.log("Authentication Service accessed.");
    return this.http.post<any>(environment.endpoint + AuthenticationService.AUTH_TOKEN, {username, password})
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
