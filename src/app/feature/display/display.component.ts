import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ISearchresult_state } from 'src/app/core/models/statemodel/stateresponse';
import { SearchresultService } from 'src/app/services/searchresult.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  constructor(private searchresultService: SearchresultService) { }

  // searchValue!: string;
  subscription: Subscription[] = [];
  searchResult$!: Observable<ISearchresult_state>;
  searchResult!: ISearchresult_state;
  resultForDisplay!: any;
  /**
  * Subscribe to the value from the store 
  */
  ngOnInit(): void {
    this.searchResult$ = this.searchresultService.getState();
    this.subscription.push(this.searchResult$.subscribe(sResult => this.searchResult = sResult));
  }
  /**
  * Prevent memory leak by ensureing all subscriptions are unsbscribed when the component is destroyed 
  */
  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe())
  }
  Test() {
    this.resultForDisplay = this.searchResult.searchResults;
    console.log(this.searchResult);
  }
  nextpage() {
    this.searchresultService.getNextPage();
    this.resultForDisplay = this.searchResult.searchResults;
    console.log(this.searchResult);
  }
}
