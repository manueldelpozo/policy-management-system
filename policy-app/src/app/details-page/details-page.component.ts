import { Component, OnInit } from '@angular/core';

import { PolicyService } from '../policy.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  user: any;
  policies: Array<Object>;

  todayStamp: number = Date.now();
  isAdmin: boolean = false;
  userName: string;

  constructor(private policyService: PolicyService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user => this.user = user);
    this.isAdmin = Boolean(this.user.id === 'admin');
    this.showPolicies();
  }

  showPolicies() {
    this.policyService.getAll().subscribe(
      data => {
        this.policies = data;
        this.showUserPolicies(this.user.id);
      },
      err => {
        console.log(err);
      });
  }

  showUserPolicies(userId: string) {
    let endDate;
    this.policyService.getByUserId(userId).subscribe(
      data => {
        this.user.policies = data.map(pol => {
          if (pol.endDate) {
            pol.endDate = new Date(pol.endDate);
            pol.endDateStamp = pol.endDate.getTime();
            return pol;
          }
        });
      },
      err => {
        console.log(err);
      });
  }

}
