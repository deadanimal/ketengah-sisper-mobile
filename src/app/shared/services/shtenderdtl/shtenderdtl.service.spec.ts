import { TestBed } from '@angular/core/testing';

import { ShtenderdtlService } from './shtenderdtl.service';

describe('ShtenderdtlService', () => {
  let service: ShtenderdtlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShtenderdtlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
