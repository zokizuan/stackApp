import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-child',
  templateUrl: './display-child.component.html',
  styleUrls: ['./display-child.component.scss']
})
export class DisplayChildComponent implements OnInit {
  @Input() searchResults: any;
  constructor() { }

  ngOnInit(): void {
  }
  test() {
    console.log(this.searchResults);
  }
}
