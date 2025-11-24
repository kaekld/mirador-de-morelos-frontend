import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCardAlt } from './place-card-alt';

describe('PlaceCardAlt', () => {
  let component: PlaceCardAlt;
  let fixture: ComponentFixture<PlaceCardAlt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceCardAlt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceCardAlt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
