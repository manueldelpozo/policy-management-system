import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { User } from '../_models/User';;

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  create(user: any) {
    return this.http.post<any>('/user/register', user).map(user => user);
  }
}
