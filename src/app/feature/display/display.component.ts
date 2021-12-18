import { ISearch } from './../../core/models/search.response.model';
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
  sResult$!: Observable<ISearchresult_state>;
  sResult!: ISearchresult_state;

  // resultForDisplay!: ISearch[];
  /**
  * Subscribe to the value from the store 
  */
  ngOnInit(): void {
    this.sResult$ = this.searchresultService.getState();
    this.subscription.push(this.sResult$.subscribe
      ((res) => {
        this.sResult = res

        // this.searchStarted = true;
      })
    );
  }
  /**
  * Prevent memory leak by ensureing all subscriptions are unsbscribed when the component is destroyed 
  */
  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe())
  }


}
