import { TestBed } from '@angular/core/testing';

import { AlatanService } from './alatan.service';

describe('AlatanService', () => {
  let service: AlatanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlatanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
