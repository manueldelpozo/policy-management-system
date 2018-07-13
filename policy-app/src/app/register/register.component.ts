import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  message: string;
  success: boolean;

  constructor(
    private router: Router, 
    // private userService: UserService
  ) { }

  ngOnInit() {
    this.message = '';
  }

  register(f: NgForm) {
    console.log(f);
    if (f.form.valid) {
      console.log(f.value);
      const dateOfBirth = new Date(f.value.dateOfBirth);

      if (f.value.password !== f.value.confirmPassword) {
        this.message = 'Please confirm the password.';
        this.success = false;
      } else if (dateOfBirth.getTime() > Date.now()) {
        this.message = 'Please add a proper date.';
        this.success = false;
      } else {
        this.model.id = f.value.firstName + f.value.dateOfBirth.split('/')[0] + f.value.dateOfBirth.split('/')[1];
        /* this.userService.create(this.model).subscribe(
          data => {
            alert('Your details are registered');
            this.router.navigate(['/login']);
          },
          error => {
            console.log(error);
            this.message = 'Sorry, we have problems to register you. Try again later.';
            this.success = false;
          }) */
        this.message = 'You have successfully registered! ';
        this.success = true;
      }
    } else {
      this.message = f.value.email ? 'The email is invalid. Please add "_".' : 'Some field is not valid or incomplete. Please check.';
      this.success = false;
    }

    
      
    
  }

}
