import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceModal } from './place-modal';

describe('PlaceModal', () => {
  let component: PlaceModal;
  let fixture: ComponentFixture<PlaceModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
