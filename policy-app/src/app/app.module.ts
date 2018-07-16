import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { AuthenticationService } from 'app/authentication.service';
import { PolicyService } from 'app/policy.service';
import { DataService } from 'app/data.service';
import { UserService } from 'app/user.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      links: [
        {
          name: 'Register',
          url: 'register'
        },
        {
          name: 'About Us',
          url: ''
        },
        {
          name: 'Contact Us',
          url: ''
        }
      ]
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      links: [
        {
          name: 'Register',
          url: 'register'
        },
        {
          name: 'About Us',
          url: ''
        },
        {
          name: 'Contact Us',
          url: ''
        }
      ]
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      links: [
        {
          name: 'Home',
          url: ''
        }
      ]
    }
  },
  {
    path: 'details',
    component: DetailsPageComponent,
    data: {
      links: [
        {
          name: 'Logout',
          url: 'login'
        }
      ]
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigatorComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    AuthenticationService,
    UserService,
    PolicyService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
