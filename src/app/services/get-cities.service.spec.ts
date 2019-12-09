import { TestBed } from '@angular/core/testing';

import { GetCitiesService } from './get-cities.service';

describe('GetCitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCitiesService = TestBed.get(GetCitiesService);
    expect(service).toBeTruthy();
  });
});
