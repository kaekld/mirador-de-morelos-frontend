import { Component, effect, inject, input, OnInit } from '@angular/core';
import { PlacePostService } from '../../../services/place-post-service';
import { PostCard } from "../../../components/home-elements/recent-post/post-card/post-card";

@Component({
  selector: 'app-place-posts',
  imports: [PostCard],
  templateUrl: './place-posts.html',
  styles: ``,
})
export class PlacePosts{

  placePostsService = inject(PlacePostService)
  userId = input.required<number | null | undefined>();

  constructor() {
    effect(() => {
      this.placePostsService.loadPostsList(this.userId());
    });
  }

}
