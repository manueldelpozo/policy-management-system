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
    private userService: UserService
  ) { }

  ngOnInit() {
    this.message = '';
  }

  register(f: NgForm) {
    if (f.form.valid) {
      if (f.value.password !== f.value.confirmPassword) {
        this.message = 'Please confirm the same password.';
      } 
      if (!/\S+\_(\S+)?@\S+\.\S+/.test(f.value.email)) {
        this.message = 'Your email address is invalid. Please use this format "email_address@example.com". ';
      }
      if (isNaN(f.value.contactNumber)) {
        this.message = 'Your phone number should be only numbers. ';
      }
      this.success = false;
        
      if (f.value.password === f.value.confirmPassword && /\S+\_(\S+)?@\S+\.\S+/.test(f.value.email) && !isNaN(f.value.contactNumber) && this.isValidDate(f.value.dateOfBirth)) {
        this.model = f.value;
        this.model.id = f.value.firstName.toLowerCase() + f.value.dateOfBirth.split('/')[0] + f.value.dateOfBirth.split('/')[1];

        this.userService.create(this.model).subscribe(
          data => {
            this.message = 'Welcome ' + this.model.id + '! You have been successfully registered! ';
            this.success = true;
          },
          error => {
            console.log(error);
            this.message = 'Sorry, we have problems to register you. Try again later.';
            this.success = false;
          })      
      }
    } else {
      this.message = 'Sorry, we found some empty fields.';
      this.success = false;
    }
  }

  isValidDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    if (!date) {
      this.message = 'Please insert the proper format for date dd/mm/yyyy.';
      this.success = false;
    } else {
      if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
        this.message = 'Please insert the proper format for date dd/mm/yyyy.';
        this.success = false;
      } else if (date.getTime() > Date.now() || Number(dateString.split('/')[2]) > today.getFullYear()) {
        this.message = 'Your date of birth cannot be after current date. Please correct the date.';
        this.success = false;
      } else {
        this.success = true;
      }
    }

    return this.success;
  }

}
