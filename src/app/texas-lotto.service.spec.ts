import { TestBed } from '@angular/core/testing';

import { TexasLottoService } from './texas-lotto.service';
import { of } from 'rxjs';

fdescribe('TexasLottoService', () => {
  let service: TexasLottoService;

  beforeEach(() => TestBed.configureTestingModule({

  }));

  beforeEach(() => {
    service = TestBed.get(TexasLottoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should generate Texas Lotto numbers', () => {
    service.generate().subscribe(numbers => {
      expect(numbers.length).toEqual(6);
      expect(numbers[0]).toEqual(1);
      expect(numbers[1]).toEqual(2);
      expect(numbers[2]).toEqual(3);
      expect(numbers[3]).toEqual(4);
      expect(numbers[4]).toEqual(5);
      expect(numbers[5]).toEqual(6);
    });
  })
});
