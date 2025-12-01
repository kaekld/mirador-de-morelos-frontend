import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlace } from './user-place';

describe('UserPlace', () => {
  let component: UserPlace;
  let fixture: ComponentFixture<UserPlace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPlace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPlace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
