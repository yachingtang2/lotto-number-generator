import { TestBed } from '@angular/core/testing';

import { TwoStepService } from './two-step.service';
import { of } from 'rxjs';

describe('TwoStepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwoStepService = TestBed.get(TwoStepService);
    expect(service).toBeTruthy();
  });

  it('should generate two step number', () => {
    const service: TwoStepService = TestBed.get(TwoStepService);
    service.generate().subscribe(numbers => expect(numbers).toEqual([5,15,25,35,45]));
  });
});
