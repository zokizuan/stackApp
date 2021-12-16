import { Component, OnInit } from '@angular/core';
import { SearchresultService } from 'src/app/services/searchresult.service';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  searchResults: any;
  constructor(private sharingService: SharingService, private searchresultService:SearchresultService) { }

  ngOnInit(): void {
    // this.searchResults = this.sharingService.getData();
  }
}
