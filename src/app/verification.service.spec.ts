import { TestBed } from '@angular/core/testing';

import { VerificationService } from './verification.service';

fdescribe('VerificationService', () => {
  let  service: VerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(VerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should verify user admin/admin is a valid user', () => {
    expect(service.verifyUser('admin', 'admin')).toBeTruthy();
  });

  it('should verify user abc/abc is an invalid user', () => {
    expect(service.verifyUser('abc', 'abc')).toBeFalsy();
  });
});
