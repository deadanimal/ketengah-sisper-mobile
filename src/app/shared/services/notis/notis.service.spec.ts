import { TestBed } from '@angular/core/testing';

import { NotisService } from './notis.service';

describe('NotisService', () => {
  let service: NotisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
