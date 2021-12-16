import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import {  IStackAPI_resp } from 'src/app/core/models/search.response.model';
import { ISearchresult_state } from 'src/app/core/models/statemodel/stateresponse';
import { SearchresultService } from 'src/app/services/searchresult.service';
import { SharingService } from 'src/app/services/sharing.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchValue!: string;
  subscription: Subscription[] = [];
  searchResult$ !: Observable<ISearchresult_state>;
  searchResult !: ISearchresult_state;
  constructor(
    private router: Router, private sharingService: SharingService, private searchresultService:SearchresultService) {
  }
  /**
   * Prevent memory leak by ensureing all subscriptions are unsbscribed when the component is destroyed 
   */
  ngOnDestroy(): void {
    // this.subscription.forEach(subscription => subscription.unsubscribe())
  }
  /**
   * Subscribe to the value from the store 
   */
  ngOnInit(): void {
    // this.searchResult$ = this.searchresultService.getState();
    // this.subscription.push(this.searchResult$.subscribe(sResult => this.searchResult = sResult));
  }
  // declare searchresult variable
  searchResults: any;

  // function for sending searchresult to display component

/*   sendSearchResults() {
    this.sharingService.setData(this.searchResults);
    this.router.navigate(['search-results']);
  } */
  searchQuestion(searchQuery:string) {
    this.searchresultService.searchQuestion(searchQuery);
    
  }
}