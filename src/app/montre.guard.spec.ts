import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { montreGuard } from './montre.guard';

describe('montreGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => montreGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
