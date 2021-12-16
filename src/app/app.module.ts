import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './feature/sidebar/sidebar.component';
import { SearchComponent } from './feature/search/search.component';
import { SharingService } from './services/sharing.service';
import { DisplayComponent } from './feature/display/display.component';
import { DisplayViewComponent } from './feature/display/display-view/display-view.component';
import { SearchresultService } from './services/searchresult.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchComponent,
    DisplayComponent,
    DisplayViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [SharingService, SearchresultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
