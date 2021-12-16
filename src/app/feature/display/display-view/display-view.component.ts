import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ISearchresult_state } from 'src/app/core/models/statemodel/stateresponse';
import { SearchresultService } from 'src/app/services/searchresult.service';

@Component({
  selector: 'app-display-view',
  templateUrl: './display-view.component.html',
  styleUrls: ['./display-view.component.scss']
})
export class DisplayViewComponent implements OnInit {

  constructor(private searchresultService: SearchresultService) { }
  // searchValue!: string;
  subscription: Subscription[] = [];
  searchResult$!: Observable<ISearchresult_state>;
  searchResult!: ISearchresult_state;
  resultDisplay!: any;
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
    this.resultDisplay = this.searchResult;
    console.log(this.searchResult);
  }

}
