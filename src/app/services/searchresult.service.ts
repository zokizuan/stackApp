import { IStackAPI_resp } from './../core/models/search.response.model';
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


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  SearchQuery = "";
  // Define API
  APIBoilerPlate = 'https://api.stackexchange.com/2.3';
  APIParameter = "/search/advanced?";
  pageNumber = "page=1";
  pageSize = "&pagesize=15";
  stackoverflow = "&site=stackoverflow";
  filter = "&filter=!3u4cnJYn(8nBk_9SQ";

  /**
   * @description This method is caleld every time user enters NEW query . Response from the api is set to the store 
   * @param searchQuery query eneter by the user
   */
  public callSearch(searchQuery: string) {
    this.SearchQuery = searchQuery;
    searchQuery = "&q=" + searchQuery;
    const API_URL = this.APIBoilerPlate + this.APIParameter + this.pageNumber + this.pageSize + searchQuery + this.stackoverflow + this.filter
    this.http
      .get<IStackAPI_resp>(API_URL)
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
