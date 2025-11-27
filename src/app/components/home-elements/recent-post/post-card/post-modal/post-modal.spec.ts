import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostModal } from './post-modal';

describe('PostModal', () => {
  let component: PostModal;
  let fixture: ComponentFixture<PostModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
