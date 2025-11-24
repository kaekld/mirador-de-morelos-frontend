import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Places } from './places';

describe('Places', () => {
  let component: Places;
  let fixture: ComponentFixture<Places>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Places]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Places);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
