import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult:any;
  searchText: any;
  constructor() { 
    this.searchText = "Hello";
  }
 
  ngOnInit() {
  }

  onSearch(value)
  {
    this.searchResult = "Search Result Data=>"+value;
    return;
  }

}
