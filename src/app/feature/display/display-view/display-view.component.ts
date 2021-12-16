import { Component, Input, OnInit } from '@angular/core';
import { SearchresultService } from 'src/app/services/searchresult.service';

@Component({
  selector: 'app-display-view',
  templateUrl: './display-view.component.html',
  styleUrls: ['./display-view.component.scss']
})
export class DisplayViewComponent implements OnInit {

  constructor(private searchresultService: SearchresultService) { }
  // searchValue!: string;
  @Input() resultForDisplay: any;
  /**
  * Subscribe to the value from the store 
  */
  ngOnInit(): void {
  }
  /**
  * Prevent memory leak by ensureing all subscriptions are unsbscribed when the component is destroyed 
  */
  ngOnDestroy(): void {
  }
}
