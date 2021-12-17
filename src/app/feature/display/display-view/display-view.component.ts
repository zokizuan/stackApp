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
  first = ""
  paginate(event: any) {
    this.totalRecords = this.searchresultService.getLastPageNumber()
    event.page = this.sResult.pageno
    event.pageCount = 4
    this.first = event.first +"of"+ this.totalRecords
    // this.totalRecords = 3
    this.myPaginationString  = "showing "
    console.log(this)
  }
  test() {
    console.log(this.resultForDisplay)
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
