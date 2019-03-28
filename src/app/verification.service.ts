import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  isVerifiedUser: boolean;

  constructor() { }

  verifyUser(userId: string, password: string) {
    this.isVerifiedUser = (userId === 'admin' && password === 'admin');
  }

  isVerified() {
    return this.isVerifiedUser;
  }
}
