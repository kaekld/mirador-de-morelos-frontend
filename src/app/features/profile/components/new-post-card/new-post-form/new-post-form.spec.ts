import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostForm } from './new-post-form';

describe('NewPostForm', () => {
  let component: NewPostForm;
  let fixture: ComponentFixture<NewPostForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPostForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
