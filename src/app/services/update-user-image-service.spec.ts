import { TestBed } from '@angular/core/testing';

import { UpdateUserImageService } from './update-user-image-service';

describe('UpdateUserImageService', () => {
  let service: UpdateUserImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateUserImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
