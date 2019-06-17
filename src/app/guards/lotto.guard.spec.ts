import { LottoGuard } from './lotto.guard';
import { inject, TestBed } from '@angular/core/testing';
import { VerificationService } from '../verification.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Lotto guard', () => {
  let lottoGuard: LottoGuard;
  let service: VerificationService;
  let router: Router;
  let serviceSpy;
  let routerSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ LottoGuard ],
      imports: [ RouterTestingModule ]
    });
    lottoGuard = TestBed.get(LottoGuard);
    service = TestBed.get(VerificationService);
    router = TestBed.get(Router);
  });

  it('should ...', inject([LottoGuard], (guard: LottoGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should fail for invalid user', () => {
    routerSpy = spyOn(router, 'navigate').and.returnValue(['/welcome']);
    serviceSpy = spyOn(service, 'isVerified').and.returnValue(false);
    expect(lottoGuard.canActivate(null, null)).toBeFalsy();
    expect(serviceSpy).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledWith(['welcome']);
  });

  it('should activate for valud user', () => {
    routerSpy = spyOn(router, 'navigate').and.callThrough();
    serviceSpy = spyOn(service, 'isVerified').and.returnValue(true);
    expect(lottoGuard.canActivate(null, null)).toBeTruthy();
    expect(serviceSpy).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledTimes(0);
  });
});
