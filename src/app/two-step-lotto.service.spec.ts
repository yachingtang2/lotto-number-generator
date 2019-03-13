import { TestBed } from '@angular/core/testing';

import { TwoStepLottoService } from './two-step-lotto.service';
import { of } from 'rxjs';

describe('TwoStepLottoService', () => {
  let service: TwoStepLottoService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeAll(() => {
    service = TestBed.get(TwoStepLottoService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should return two step lotto numbers', () => {
    service.generate().subscribe(numbers => expect(numbers).toEqual([1,2,3,4,5]));
  });
});
