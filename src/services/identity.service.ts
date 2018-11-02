import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../shared/identity/model/user.interface';
import {environment} from '../environments/environment';

@Injectable({ providedIn: 'root'})

export class IdentityService {
  constructor(private http: HttpClient){

  }

  getAll() {
    return this.http.get<User[]>(environment.endpoint + '/users');
  }
}
