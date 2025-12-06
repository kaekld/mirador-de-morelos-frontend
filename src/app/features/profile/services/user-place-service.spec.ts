import { TestBed } from '@angular/core/testing';

import { UserPlaceService } from './user-place-service';

describe('UserPlaceService', () => {
  let service: UserPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
