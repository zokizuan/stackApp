import { ISearch } from './../../../core/models/search.response.model';
import { Component, Input, OnInit } from '@angular/core';
import { SearchresultService } from 'src/app/services/searchresult.service';

@Component({
  selector: 'app-display-view',
  templateUrl: './display-view.component.html',
  styleUrls: ['./display-view.component.scss']
})
export class DisplayViewComponent implements OnInit {

  constructor(private searchresultService: SearchresultService) { }
  @Input() resultForDisplay!: ISearch[];
  test() {
    console.log(this.resultForDisplay)
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
