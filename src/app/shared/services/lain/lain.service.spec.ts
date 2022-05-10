import { TestBed } from '@angular/core/testing';

import { LainService } from './lain.service';

describe('LainService', () => {
  let service: LainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
