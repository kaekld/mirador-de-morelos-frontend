import { TestBed } from '@angular/core/testing';

import { DeletePlaceService } from './delete-place-service';

describe('DeletePlaceService', () => {
  let service: DeletePlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
