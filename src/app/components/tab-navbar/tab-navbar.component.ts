import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-navbar',
  templateUrl: './tab-navbar.component.html',
  styleUrls: ['./tab-navbar.component.css']
})
export class TabNavbarComponent implements OnInit {
  tabNavLinks: any;
  constructor() {
    this.tabNavLinks = [      
      { path: 'search', label: 'Search'},
      { path: 'add', label: 'Add' }];
      

  }

  ngOnInit() {

  }

}
