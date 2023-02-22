import { TestBed } from '@angular/core/testing';

import { JaratokapiService } from './jaratokapi.service';

describe('JaratokapiService', () => {
  let service: JaratokapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaratokapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
