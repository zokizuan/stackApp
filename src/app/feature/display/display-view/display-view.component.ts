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
  @Input() resultForDisplay: ISearch[] = [];
  @Input() totalRecords!: number;

  pageInfo = ""
  paginate(event: any) {
    // Initial Page
    // console.log("Initial Page " + event.first)
    this.searchresultService.getSpecificPage((event.first / event.rows) + 1);
    // console.log("rows to display " + event.rows)
    event.pageCount = this.searchresultService.getLastPageNumber()
    // console.log("Total Page " + event.pageCount)
    // total Records
    this.totalRecords = this.sResult.total_record
    // console.log("event.totalRecords " + this.totalRecords)
    this.pageInfo = (event.first / event.rows) + 1 + "of" + event.pageCount
  }

  toLocalDate(EpochTime: number): string {
    const unixEpochTimeMS = EpochTime * 1000;
    const d = new Date(unixEpochTimeMS);
    // Careful, the string output here can vary by implementation...
    const strDate = d.toLocaleString(undefined, { year: '2-digit', month: 'short', day: 'numeric', timeZone: 'Asia/Kolkata' });
    return strDate + " at " + d.toLocaleString(undefined, { hour: '2-digit', minute: '2-digit' })
  }
  bodyTruncate(str: string, length: number) {
    const ending = '<span>...</span></p>';
    str = str.substring(0, length - ending.length);
    const regex = /<\/p>[\s\S]+/i;
    const subst = ``;
    let result = str.replace(regex, subst);
    return result + ending
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
