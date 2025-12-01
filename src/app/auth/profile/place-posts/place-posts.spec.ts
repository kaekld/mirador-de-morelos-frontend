import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacePosts } from './place-posts';

describe('PlacePosts', () => {
  let component: PlacePosts;
  let fixture: ComponentFixture<PlacePosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacePosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacePosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
