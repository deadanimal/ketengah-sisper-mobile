import { TestBed } from '@angular/core/testing';

import { BilPremisService } from './bil-premis.service';

describe('BilPremisService', () => {
  let service: BilPremisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilPremisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
