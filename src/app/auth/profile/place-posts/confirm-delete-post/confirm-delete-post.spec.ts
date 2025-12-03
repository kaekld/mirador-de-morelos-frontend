import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletePost } from './confirm-delete-post';

describe('ConfirmDeletePost', () => {
  let component: ConfirmDeletePost;
  let fixture: ComponentFixture<ConfirmDeletePost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDeletePost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeletePost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
