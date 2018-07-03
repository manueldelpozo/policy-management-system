import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';


@Component({
  // moduleID: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any;
  returnUrl: string;

  constructor(private route: ActivatedRoute, public router: Router) {
 }

  ngOnInit() {
    // reset login status
    // this.authenticationservice.logout();
    // get return url from parameters
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  login() {
    alert('submit');

    /*this.authenticationservice.login(this.model.username, this.model.password).subscribe(
      data => {
          this.router.navigate(['/details']);
      }, err => err);*/

    this.router.navigate(['/details']);
  }

}
