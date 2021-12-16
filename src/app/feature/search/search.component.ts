import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ISearchresult_state } from 'src/app/core/models/statemodel/stateresponse';
import { SearchresultService } from 'src/app/services/searchresult.service';


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
    private router: Router, private searchresultService: SearchresultService) {
  }
  searchResults(searchQuery: string) {
    this.searchresultService.callSearch(searchQuery);

  }
  displaySearch() {
    this.router.navigate(['search-results']);
  }
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
  }

}