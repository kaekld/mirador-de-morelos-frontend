import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightPlaces } from './highlight-places';

describe('HighlightPlaces', () => {
  let component: HighlightPlaces;
  let fixture: ComponentFixture<HighlightPlaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightPlaces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightPlaces);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
