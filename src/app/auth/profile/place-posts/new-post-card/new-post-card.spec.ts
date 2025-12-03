import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostCard } from './new-post-card';

describe('NewPostCard', () => {
  let component: NewPostCard;
  let fixture: ComponentFixture<NewPostCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPostCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
