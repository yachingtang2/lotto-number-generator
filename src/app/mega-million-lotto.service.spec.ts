import { TestBed } from '@angular/core/testing';

import { MegaMillionLottoService } from './mega-million-lotto.service';
import { of } from 'rxjs';

describe('MegaMillionLottoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MegaMillionLottoService = TestBed.get(MegaMillionLottoService);
    expect(service).toBeTruthy();
  });

  it('should return Mega Million Lotto numbers', () => {
    const service: MegaMillionLottoService = TestBed.get(MegaMillionLottoService);
    service.generate().subscribe(numbers => {
      expect(numbers).toEqual([2, 12, 22, 32, 42, 52]);
    });
  });
});
