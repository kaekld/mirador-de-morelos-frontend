import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCard } from './news-card';

describe('NewsCard', () => {
  let component: NewsCard;
  let fixture: ComponentFixture<NewsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
