import { TestBed } from '@angular/core/testing';

import { PremisService } from './premis.service';

describe('PremisService', () => {
  let service: PremisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
