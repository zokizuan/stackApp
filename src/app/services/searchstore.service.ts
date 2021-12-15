import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StackCommService } from './stack-comm.service';

@Injectable({
  providedIn: 'root'
})
export class SearchstoreService {
  constructor(private stackCommService: StackCommService) { }

  private readonly _searchResults: BehaviorSubject<any> = new BehaviorSubject('initial State');

  readonly searchResults$: Observable<any> = this._searchResults.asObservable();

  get searchResults() {
    return this._searchResults.getValue();
  }
  private set searchResults(val: any[]) {
    this._searchResults.next(val);
  }
  async addsearchResults(data: any) {
    this.searchResults = [
      ...this.searchResults
    ];
  }

}
