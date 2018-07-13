import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(id: string, password: string) {
    return this.http.post<any>('/user/login', {
      id: id,
      password: password
    }).map(user => user);
  }

  logout() {
    console.log('logout');
  }
}
