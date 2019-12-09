import { TestBed } from '@angular/core/testing';

import { ViewUserService } from './view-user.service';

describe('ViewUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewUserService = TestBed.get(ViewUserService);
    expect(service).toBeTruthy();
  });
});
