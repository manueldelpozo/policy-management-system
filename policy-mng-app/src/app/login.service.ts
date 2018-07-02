import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private url = 'http://localhost/restapiserve/api/';
  
  constructor(private http: Http) { }
  
  login(post): Observable<any> {
    console.log(post);
    const getLoginUrl = this.url + 'get/login/' + post['username'] + '/' + post['password'];
    return this.http.get(getLoginUrl, {}).map(
      res => {
        if (res.json().status) {
          localStorage.setItem('currentUser', JSON.stringify(res.json().data));
        }
        return res.json();
      }, err => err
    )
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getItem(): Observable<any> {
    return this.http.get(this.url + 'get/item/list', {}).map(res => res.json(), err => err)
  }

}
