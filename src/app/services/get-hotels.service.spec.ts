import { TestBed } from '@angular/core/testing';

import { GetHotelsService } from './get-hotels.service';

describe('GetHotelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetHotelsService = TestBed.get(GetHotelsService);
    expect(service).toBeTruthy();
  });
});
