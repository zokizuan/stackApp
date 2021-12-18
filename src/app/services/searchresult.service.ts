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

  // Define API
  readonly APIBaseURL = 'https://api.stackexchange.com/2.3';
  readonly APIParameter = "/search/advanced?";
  readonly stackoverflow = "&site=stackoverflow";
  readonly searchQueryParam = "&q=";
  readonly filter = "&filter=!3u4cnJYn(8nBk_9SQ";



  // Get Current Search Query
  public getCurrentSearchQuery(): string {
    let currentSearchQuery!: string;
    this.getState().pipe(first()).subscribe(sResult => currentSearchQuery = (
      sResult.searchKey == undefined ? "" : sResult.searchKey
    ));
    return currentSearchQuery;
  }
  // Get Current Page Number
  public getCurrentPageNumber(): number {
    let currentPage!: number;
    this.getState().pipe(first()).subscribe(sResult => currentPage = (sResult.pageno));
    if (isNaN(currentPage) || currentPage == 0 || currentPage == undefined) {
      return 0
    } else {
      return currentPage;
    }
  }
  // Get Last Page Number
  public getLastPageNumber(): number {
    let lastPageNumber!: number;
    this.getState().pipe(first()).subscribe(sResult => 
      lastPageNumber = (Math.ceil(sResult.total_record / sResult.pagesize)));
    if (isNaN(lastPageNumber) || lastPageNumber == 0 || lastPageNumber == undefined) {
      return 0
    } else {
      // console.log("last page returned " + lastPageNumber) 
      return lastPageNumber;
    }
  }

  /**
   * @description This method is called every time user enters NEW query . Response from the api is set to the store 
   * @param searchQuery query eneter by the user
   * @param pageChange Page number on pagechange
   */
  public callSearch(searchQuery: string, pageChange?: number) {
    let pageNumberValue = 1;
    // page handling
    if (pageChange) {
      const newPageNumber = pageChange
      pageNumberValue = newPageNumber
    }
    let pageNumber = `page=${pageNumberValue}`
    let pageSize = "&pagesize=15"
    
    const API_URL = (searchQuery == "" || searchQuery == undefined) ? (this.APIBaseURL + this.APIParameter + pageNumber + pageSize + this.stackoverflow + this.filter) : (this.APIBaseURL + this.APIParameter + pageNumber + pageSize + this.searchQueryParam + searchQuery + this.stackoverflow + this.filter);
    // TEST
    // const API_URL = pageNumberValue== 2 ? "https://mocki.io/v1/ff2c510b-dc38-43d9-b9dd-a7de71e8a073": "https://mocki.io/v1/c1db5789-43bb-4641-9de5-94609d1bafb5"
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
  public getNextPage() {
    const lastPageNumber = this.getLastPageNumber()
    const CP = this.getCurrentPageNumber()
    if (CP == 0) {
      console.error("current page cannot be 0")
    }
    else if (CP >= lastPageNumber) {
      const errorMessage = "current page cannot more than the last page"
      console.error(errorMessage)
      throw new Error(errorMessage);
    }
    else {
      const nextPage = CP + 1;
      console.log(nextPage)
      let searchQuery = this.getCurrentSearchQuery()
      this.callSearch(searchQuery, nextPage)
    }
  }
  // getSpecificPage
  public getSpecificPage(pageNumber: number) {
    const lastPageNumber = this.getLastPageNumber()
    if (pageNumber <= 0) {
      console.error("current page cannot be 0")
    }
/*     else if (pageNumber > lastPageNumber) {
      const errorMessage = "current page cannot more than the last page"
      console.error(errorMessage)
      throw new Error(errorMessage);
    } */
    else {
      // console.log("pageNumber input to func " + pageNumber)
      // console.log("lastpage Number wrt to func " + pageNumber)
      let searchQuery = this.getCurrentSearchQuery()
      this.callSearch(searchQuery, pageNumber)
    }
  }
  
  // getPreviousPage
  public getPreviousPage() {
    const CP = this.getCurrentPageNumber()
    if (CP == 0) {
      console.error("current page cannot be 0")
    }
    else if (CP == 1) {
      console.error("This is the first page")
    }
    else {
      const nextPage = CP + 1;
      console.log(nextPage)
      let searchQuery = this.getCurrentSearchQuery()
      this.callSearch(searchQuery, nextPage)
    }
  }

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