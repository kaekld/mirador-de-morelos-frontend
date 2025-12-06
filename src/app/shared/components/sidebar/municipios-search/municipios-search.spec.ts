import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiosSearch } from './municipios-search';

describe('MunicipiosSearch', () => {
  let component: MunicipiosSearch;
  let fixture: ComponentFixture<MunicipiosSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipiosSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipiosSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
