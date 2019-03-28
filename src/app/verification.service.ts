import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  constructor() { }

  verifyUser(userId: string, password: string): boolean {
    return this.isVerified(userId, password);
  }

  isVerified(userId: string, password: string): boolean {
    return userId === 'admin' && password === 'admin';
  }
}
