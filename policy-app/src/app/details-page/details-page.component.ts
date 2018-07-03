import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  user = {
    name: 'Manuel',
    isAdmin: false,
    policies: [
      {
        name: 'Health Insurance Policy 1',
        details: 'Policy Details 1',
        amount: 5000,
        endDate: 1583535600000
      },
      {
        name: 'Health Insurance Policy 2',
        details: 'Policy Details 2',
        amount: 5000,
        endDate: 1383535500000
      },
      {
        name: 'Health Insurance Policy 3',
        details: 'Policy Details 3',
        amount: 5000,
        endDate: 1583535700000
      },
      {
        name: 'Health Insurance Policy 4',
        details: 'Policy Details 4',
        amount: 5000,
        endDate: 1183135600000
      }
    ]
  };

  today: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
