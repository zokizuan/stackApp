import { Component, OnInit } from '@angular/core';
import { links } from 'src/app/core/routes.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  /**
   * Returns the links array
   */
   get links() {
    return links;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
