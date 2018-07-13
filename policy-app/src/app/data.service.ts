import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private userSource = new BehaviorSubject('default');
  currentUser = this.userSource.asObservable();

  constructor() { }

  changeUser(user: any) {
    this.userSource.next(user)
  }
}
