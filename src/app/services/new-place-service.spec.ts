import { TestBed } from '@angular/core/testing';

import { NewPlaceService } from './new-place-service';

describe('NewPlaceService', () => {
  let service: NewPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
