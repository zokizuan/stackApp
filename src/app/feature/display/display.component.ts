import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  searchResults: any;
  constructor(private sharingService: SharingService) { }

  ngOnInit(): void {
    this.searchResults = this.sharingService.getData();
  }
}
