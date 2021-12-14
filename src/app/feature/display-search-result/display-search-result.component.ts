import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-display-search-result',
  templateUrl: './display-search-result.component.html',
  styleUrls: ['./display-search-result.component.scss']
})
export class DisplaySearchResultComponent implements OnInit {
 searchResults:any;
  constructor(private sharingService:SharingService) { }

  ngOnInit(): void {
    this.searchResults = this.sharingService.getData();
  }
  test() {
    console.log(this.searchResults);
  }
}
