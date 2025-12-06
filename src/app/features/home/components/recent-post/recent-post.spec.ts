import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPost } from './recent-post';

describe('RecentPost', () => {
  let component: RecentPost;
  let fixture: ComponentFixture<RecentPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
