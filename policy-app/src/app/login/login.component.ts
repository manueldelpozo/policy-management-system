import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isFailed: boolean = false;
  user: any;

  constructor(public router: Router, private authenticationService: AuthenticationService, private dataService: DataService) {
 }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.dataService.currentUser.subscribe(user => this.user = user);
  }

  login(f: NgForm) {
    this.isFailed = false;
    this.dataService.changeUser(f.value.username);
    this.authenticationService.login(f.value.username, f.value.password).subscribe(
      data => {
        this.dataService.changeUser(data);
        this.router.navigate(['/details']);
      },
      err => {
        this.isFailed = true;
        console.log(err);
      });
  }
  

}
