import { TestBed } from '@angular/core/testing';

import { PenghargaanService } from './penghargaan.service';

describe('PenghargaanService', () => {
  let service: PenghargaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenghargaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
