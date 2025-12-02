import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponents } from './test-components';

describe('TestComponents', () => {
  let component: TestComponents;
  let fixture: ComponentFixture<TestComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
