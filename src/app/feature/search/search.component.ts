import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { ISearch, IStackAPI_resp } from 'src/app/core/models/search.response.model';
import { SearchViewModel } from 'src/app/core/models/viewmodel/search.view.model';
import { SearchresultService } from 'src/app/services/searchresult.service';
import { SharingService } from 'src/app/services/sharing.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchValue!: string;
  constructor(
    private router: Router, private sharingService: SharingService, private searchresultService:SearchresultService) {
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {

  }
  // declare searchresult variable
  searchResults: any;

  // function for sending searchresult to display component

  sendSearchResults() {
    this.sharingService.setData(this.searchResults);
    this.router.navigate(['search-results']);
  }
  testvar: any;
  searchQuestion(searchQuery:string) {
    this.searchresultService.searchQuestion(searchQuery);
  }
  // SearchQuestions api consume
 /*  searchQuestions(searchQuery: string) {
    this.testvar = this.stackCommService.getSearchResult(searchQuery).subscribe((searchResult: IStackAPI_resp) => {
      let searchResultData: SearchViewModel[] = searchResult.items.map((result: ISearch) => {
        return {
          tags: result.tags,
          owner: result.owner,
          is_answered: result.is_answered,
          view_count: result.view_count,
          answer_count: result.answer_count,
          creation_date: result.creation_date,
          question_id: result.question_id,
          link: result.link,
          title: result.title,
          body_markdown: result.body_markdown
        }
      });
      console.log(searchResultData);
    });
    this.sendSearchResults();
  } */

}