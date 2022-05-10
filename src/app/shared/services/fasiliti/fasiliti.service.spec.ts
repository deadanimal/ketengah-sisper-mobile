import { TestBed } from '@angular/core/testing';

import { FasilitiService } from './fasiliti.service';

describe('FasilitiService', () => {
  let service: FasilitiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FasilitiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
