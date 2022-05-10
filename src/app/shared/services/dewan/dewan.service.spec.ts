import { TestBed } from '@angular/core/testing';

import { DewanService } from './dewan.service';

describe('DewanService', () => {
  let service: DewanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DewanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
