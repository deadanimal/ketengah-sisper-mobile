import { TestBed } from '@angular/core/testing';

import { BayaranService } from './bayaran.service';

describe('BayaranService', () => {
  let service: BayaranService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BayaranService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
