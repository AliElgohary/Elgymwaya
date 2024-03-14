import { TestBed } from '@angular/core/testing';

import { TraineesService } from './trainees.service';

describe('TraineesService', () => {
  let service: TraineesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraineesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
