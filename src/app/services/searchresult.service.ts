import {
  ISearch,
  IStackAPI_resp,
} from './../core/models/search.response.model';
import { Injectable } from '@angular/core';
import { Store } from '../store';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, first, retry, throwError } from 'rxjs';
import { ISearchresult_state } from '../core/models/statemodel/stateresponse';

@Injectable({
  providedIn: 'root',
})
export class SearchresultService extends Store<ISearchresult_state> {
  constructor(private http: HttpClient) {
    super({
      searchResults: [],
      total_record: 0,
      searchKey: "",
      pagesize: 0,
      pageno: 0,
    });
  }

  // Define API
  apiURL = 'https://api.stackexchange.com/2.3';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  /**
   * @description This method is caleld every time user enters NEW query . Response from the api is set to the store 
   * @param searchQuery query eneter by the user
   */
  public searchQuestion(searchQuery: string) {
    this.http
      .get<IStackAPI_resp>(this.apiURL + '/search/advanced?q=' + searchQuery + '&site=stackoverflow' +
        '&filter=!3u4cnJYn(8nBk_9SQ')
      .pipe(retry(1), catchError(this.handleError), first())
      .subscribe((response: IStackAPI_resp) => {
        let searchResultData: ISearchresult_state = {
          searchResults: response.items,
          total_record: response.total,
          searchKey: searchQuery,
          pagesize: response.page_size,
          pageno: response.page
        }
        this.setState(searchResultData);
      });
  }

  // getNextPage
  // getPreviousPage
  // getPage
  
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
