import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideControl } from './slide-control';

describe('SlideControl', () => {
  let component: SlideControl;
  let fixture: ComponentFixture<SlideControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
