import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntry } from './new-entry';

describe('NewEntry', () => {
  let component: NewEntry;
  let fixture: ComponentFixture<NewEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
