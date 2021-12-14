import { TestBed } from '@angular/core/testing';

import { StackCommService } from './stack-comm.service';

describe('StackCommService', () => {
  let service: StackCommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackCommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
