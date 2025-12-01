import { TestBed } from '@angular/core/testing';

import { PlacePostService } from './place-post-service';

describe('PlacePostService', () => {
  let service: PlacePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
