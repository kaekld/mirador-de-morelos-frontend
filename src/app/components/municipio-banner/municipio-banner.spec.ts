import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipioBanner } from './municipio-banner';

describe('MunicipioBanner', () => {
  let component: MunicipioBanner;
  let fixture: ComponentFixture<MunicipioBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipioBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipioBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
