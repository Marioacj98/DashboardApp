import { TestBed } from '@angular/core/testing';

import { CookiesService } from './cookie.service';

describe('CookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookiesService = TestBed.get(CookiesService);
    expect(service).toBeTruthy();
  });
});
