import { TestBed } from '@angular/core/testing';

import { TrainersService } from './trainers.service';

describe('TrainersService', () => {
  let service: TrainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
