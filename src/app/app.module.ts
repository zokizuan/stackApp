import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './feature/sidebar/sidebar.component';
import { SearchComponent } from './feature/search/search.component';
import { DisplaySearchResultComponent } from './feature/display-search-result/display-search-result.component';
import { SharingService } from './services/sharing.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchComponent,
    DisplaySearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [SharingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
