import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';
import { StackCommService } from 'src/app/services/stack-comm.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,OnDestroy {
  searchValue!: string;
  constructor(private stackCommService: StackCommService,
    private router: Router, private sharingService: SharingService) {
  }
  ngOnInit(): void {
  }
  searchResults: any[] = [];
  sendSearchResults() {
    this.sharingService.setData(this.searchResults);
    this.router.navigate(['search-results']);
  }
  
  // SearchQuestions
  searchQuestions(searchQuery: string) {
    this.stackCommService.getSearchResult(this.searchValue).subscribe(value => this.searchResults.push(value.items));
    this.sendSearchResults();
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }  
  
 /*  ngOnDestroy(): void {
    this.searchResult$.Unsubsribe();
  } */
}
