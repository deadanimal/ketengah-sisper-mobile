import { TestBed } from '@angular/core/testing';

import { BilRumahService } from './bil-rumah.service';

describe('BilRumahService', () => {
  let service: BilRumahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilRumahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
