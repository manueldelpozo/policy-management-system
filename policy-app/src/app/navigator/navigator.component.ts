import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  links: any[];

  constructor(private router: Router) {
    let url: String;
    router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          url = event.url;
          this.updateLinks(router.config, url);
        }
      });
  }

  ngOnInit() {

  }

  updateLinks(routes, url) {
    routes.forEach(route => {
      if ('/' + route.path === url) {
        this.links = route.data.links;
      }
    });
  }

}
