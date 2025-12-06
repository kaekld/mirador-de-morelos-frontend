import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormModal } from './register-form-modal';

describe('RegisterFormModal', () => {
  let component: RegisterFormModal;
  let fixture: ComponentFixture<RegisterFormModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
