import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDelete } from './confirm-delete';

describe('ConfirmDelete', () => {
  let component: ConfirmDelete;
  let fixture: ComponentFixture<ConfirmDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
