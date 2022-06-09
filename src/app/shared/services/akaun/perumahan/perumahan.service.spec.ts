import { TestBed } from '@angular/core/testing';

import { PerumahanService } from './perumahan.service';

describe('PerumahanService', () => {
  let service: PerumahanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerumahanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
