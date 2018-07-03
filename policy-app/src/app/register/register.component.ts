import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(
    private router: Router, 
    // private userService: UserService
  ) { }

  ngOnInit() {
  }

  register() {
    this.model.id = this.model.firsName + this.model.dateOfbirth.split('/')[0] + this.model.dateOfbirth.split('/')[1];
    /* this.userService.create(this.model).subscribe(
      data => {
        alert('Your details are registered');
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      }) */
    
  }

}
