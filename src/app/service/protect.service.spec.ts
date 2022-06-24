import { TestBed } from '@angular/core/testing';

import { ProtectService } from './protect.service';

describe('ProtectService', () => {
  let service: ProtectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
