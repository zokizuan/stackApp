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
import { DisplayChildComponent } from './feature/display/display-child/display-child.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchComponent,
    DisplayComponent,
    DisplayChildComponent,
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
