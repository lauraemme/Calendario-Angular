import { TestBed } from '@angular/core/testing';

import { DayGenerateService } from './day-generate.service';

describe('DayGenerateService', () => {
  let service: DayGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
