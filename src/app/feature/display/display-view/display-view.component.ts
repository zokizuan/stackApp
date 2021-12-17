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
  myPaginationString = "";
  pageInfo = ""
  paginate(event: any) {

    event.first = 1
    event.rows = 15
    event.page = this.searchresultService.getCurrentPageNumber()
    // event.pageCount =

    this.totalRecords = this.searchresultService.getLastPageNumber()
    this.pageInfo = (event.first + 1) + "of" + this.totalRecords
    // this.totalRecords = 3
    this.myPaginationString = "showing "
    console.log(this)
  }


  bodyTruncate(str: string, length: number) {
    const ending = '<span>...</span></p>';
    str = str.substring(0, length - ending.length);
    const regex = /<\/p>[\s\S]+/i;
    const subst = ``;
    let result = str.replace(regex, subst);
    console.log(result)
    // const removeCodefrombodyRegex = /<pre.[\s\S]+/i;
    // result = str.replace(removeCodefrombodyRegex, subst);
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
