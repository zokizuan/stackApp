import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue!: string;
  constructor() { }
  test() {
    console.log(this.searchValue);
  }
  ngOnInit(): void {
  }

}
