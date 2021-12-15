import { ISearch, IStackAPI_resp } from './../core/models/search.response.model';
import { Injectable } from '@angular/core';
import { Store } from '../store';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
import { ISearchresult_state } from '../core/models/statemodel/stateresponse';
import { SearchViewModel } from '../core/models/viewmodel/search.view.model';

@Injectable({
  providedIn: 'root'
})
export class SearchresultService extends Store<ISearchresult_state> {

  constructor(private http: HttpClient) {
    super({
      record: null,
      total_record: 0,
      searchKey: ''
    });
  }

  // Define API
  apiURL = 'https://api.stackexchange.com/2.3';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public searchQuestion(searchQuery: string) {
    return this.http.get<IStackAPI_resp>(this.apiURL + '/search/advanced?q=' + searchQuery + '&site=stackoverflow' + '&filter=!nKzQUR30W7')
      .pipe(
        retry(1),
        catchError(this.handleError),
      ).subscribe((response: IStackAPI_resp) => {
        let searchResultData: ISearchresult_state = response.items.map((result: ISearchresult_state) => {
          return {
            record: result.record,
            total_record: result.total_record,
            searchKey: result.searchKey         
          }
        });
      });

  }
  // getNextPage
  // getPreviousPage
  // getPage

  // SearchQuestions api consume
  /*   searchQuestions(searchQuery: string) {
      this.stackCommService.getSearchResult(searchQuery).subscribe((searchResult: IStackAPI) => {
        let searchResultData: SearchViewModel[] = searchResult.items.map((result: ISearch_resp) => {
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
    } */




  // Error handling 
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}