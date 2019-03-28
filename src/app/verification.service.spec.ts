import { TestBed } from '@angular/core/testing';

import { VerificationService } from './verification.service';

describe('VerificationService', () => {
  let  service: VerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(VerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should verify user admin/admin is a valid user', () => {
    service.verifyUser('admin', 'admin');
    expect(service.isVerified()).toBeTruthy();
  });

  it('should verify user abc/abc is an invalid user', () => {
    service.verifyUser('abc', 'abc');
    expect(service.isVerified()).toBeFalsy();
  });
});
