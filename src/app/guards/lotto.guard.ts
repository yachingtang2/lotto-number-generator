import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { VerificationService } from '../verification.service';

@Injectable({
  providedIn: 'root'
})
export class LottoGuard implements CanActivate {

  constructor(private service: VerificationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.service.isVerified()) {
      return true;
    } else {
      this.router.navigate(['/welcome']);
      return false;
    }
  }
}
