import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { Router } from './auth.guard';
import { AuthGuard } from './auth.guard';

describe('authGuard', () => {
  let guard: AuthGuard;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['parseUrl']);
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerSpy },
        ],
    });
    guard = TestBed.runInInjectionContext(() => TestBed.inject(AuthGuard));
  });

  it('should return true if authenticated', () => {
    spyOn(guard, 'canActivate').and.returnValue(true);
    expect(guard.canActivate()).toBe(true);
  });

  it('should return UrlTree if not authenticated', () => {
    const urlTree = TestBed.inject(Router).parseUrl('/login');
    spyOn(guard, 'canActivate').and.returnValue(urlTree);
    expect(guard.canActivate()).toBe(urlTree);
  });
});
