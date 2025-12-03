import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditData } from './edit-data';

describe('EditData', () => {
  let component: EditData;
  let fixture: ComponentFixture<EditData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
