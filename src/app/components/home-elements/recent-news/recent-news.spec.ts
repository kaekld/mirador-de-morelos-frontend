import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentNews } from './recent-news';

describe('RecentNews', () => {
  let component: RecentNews;
  let fixture: ComponentFixture<RecentNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
