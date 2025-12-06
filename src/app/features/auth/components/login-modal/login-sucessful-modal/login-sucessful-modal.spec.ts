import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSucessfulModal } from './login-sucessful-modal';

describe('LoginSucessfulModal', () => {
  let component: LoginSucessfulModal;
  let fixture: ComponentFixture<LoginSucessfulModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSucessfulModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSucessfulModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
