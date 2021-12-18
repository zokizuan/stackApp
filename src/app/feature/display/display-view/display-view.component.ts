import { first } from 'rxjs';
import { ISearchresult_state } from 'src/app/core/models/statemodel/stateresponse';
import { ISearch } from './../../../core/models/search.response.model';
import { Component, Input, OnInit } from '@angular/core';
import { SearchresultService } from 'src/app/services/searchresult.service';

@Component({
  selector: 'app-display-view',
  templateUrl: './display-view.component.html',
  styleUrls: ['./display-view.component.scss']
})
export class DisplayViewComponent implements OnInit {

  constructor(private searchresultService: SearchresultService) {

  }
  @Input() sResult!: ISearchresult_state;
  @Input() resultForDisplay!: ISearch[];

  totalRecords = 5
  pageInfo = ""
  paginate(event: any) {
    // Initial Page
    // event.first = 1
    console.log("Initial Page " + event.first)
    this.searchresultService.getSpecificPage((event.first/event.rows) + 1);
    
    //Number of rows to display in new page
    // event.rows = 15
    console.log("rows to display " + event.rows)
    
    //event.page = Index of the new page
    // event.page = this.searchresultService.getCurrentPageNumber() + 1
    // console.log("Index of the new page " + event.page)
    
    //event.pageCount = Total number of pages
    event.pageCount = this.searchresultService.getLastPageNumber()
    console.log("Total Page " + event.pageCount)    
    // total Records
    this.totalRecords = this.sResult.total_record
    console.log("event.totalRecords " + this.totalRecords)
    this.pageInfo = (event.first/event.rows)+1 + "of" + event.pageCount
  }


  bodyTruncate(str: string, length: number) {
    const ending = '<span>...</span></p>';
    str = str.substring(0, length - ending.length);
    const regex = /<\/p>[\s\S]+/i;
    const subst = ``;
    let result = str.replace(regex, subst);
    return result + ending
  }
  test() {
    console.log(this.resultForDisplay)
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  nextpage() {
    this.searchresultService.getNextPage();
    this.resultForDisplay = this.sResult.searchResults;
    console.log(this.sResult);
  }

}
