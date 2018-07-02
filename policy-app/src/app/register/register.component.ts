import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
// import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    alert('register');

    /*this.authenticationservice.login(this.model.username, this.model.password).subscribe(
      data => {
          this.router.navigate([this.returnUrl]);
      }, err => err);*/

    /*this.userService.create(this.model).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      })*/
    
  }

}
