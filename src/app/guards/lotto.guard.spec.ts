import { CanActivate, Router } from '@angular/router';
import { TestBed, async, inject } from '@angular/core/testing';

import { LottoGuard } from './lotto.guard';
import { VerificationService } from '../verification.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LottoGuard', () => {
  let lottoGuard: LottoGuard;
  let service: VerificationService;
  let router: Router;
  let serviceSpy;
  let routerSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LottoGuard],
      imports: [ RouterTestingModule ]
    });

    lottoGuard = TestBed.get(LottoGuard);
    service = TestBed.get(VerificationService);
    router = TestBed.get(Router);
  });

  it('should ...', inject([LottoGuard], (guard: LottoGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should fail when invalid user', () => {
    serviceSpy = spyOn(service, 'isVerified').and.returnValue(false);
    routerSpy = spyOn(router, 'navigate').and.returnValue('/welcome');
    expect(lottoGuard.canActivate(null, null)).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith(['/welcome']);
  });

  it('should succeed when valid user', () => {
    serviceSpy = spyOn(service, 'isVerified').and.returnValue(true);
    routerSpy = spyOn(router, 'navigate').and.callThrough();
    expect(lottoGuard.canActivate(null, null)).toBeTruthy();
    expect(routerSpy).toHaveBeenCalledTimes(0);
  });
});
