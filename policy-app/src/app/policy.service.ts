import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { User } from '../_models/User';

@Injectable()
export class PolicyService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>('/policy/all');  
  }

  getByUserId(id: string) {
    return this.http.post<any>('/policy/user', id).map(user => user);
  }
}
