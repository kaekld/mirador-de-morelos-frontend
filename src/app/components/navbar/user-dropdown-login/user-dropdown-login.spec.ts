import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDropdownLogin } from './user-dropdown-login';

describe('UserDropdownLogin', () => {
  let component: UserDropdownLogin;
  let fixture: ComponentFixture<UserDropdownLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDropdownLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDropdownLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
