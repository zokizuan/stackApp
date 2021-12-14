import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaySearchResultComponent } from './feature/display-search-result/display-search-result.component';

const routes: Routes = [
  { path: 'search-results', component: DisplaySearchResultComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
