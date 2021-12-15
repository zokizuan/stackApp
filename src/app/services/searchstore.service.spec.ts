import { TestBed } from '@angular/core/testing';

import { SearchstoreService } from './searchstore.service';

describe('SearchstoreService', () => {
  let service: SearchstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
