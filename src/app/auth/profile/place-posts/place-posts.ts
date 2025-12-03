import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { PlacePostService } from '../../../services/place-post-service';
import { PostCard } from "../../../components/home-elements/recent-post/post-card/post-card";
import { NewPostCard } from "./new-post-card/new-post-card";
import { ConfirmDeletePost } from "./confirm-delete-post/confirm-delete-post";

@Component({
  selector: 'app-place-posts',
  imports: [PostCard, NewPostCard, ConfirmDeletePost],
  templateUrl: './place-posts.html',
  styles: ``,
})
export class PlacePosts{

  placePostsService = inject(PlacePostService)
  placeId = input.required<number | null | undefined>();

  activedConfirmModal = signal<boolean>(false)

  constructor() {
    effect(() => {
      this.placePostsService.loadPostsList(this.placeId());
    });
  }

  toggleActivedConfirmModal(): void {
    this.activedConfirmModal.update(
      (value) => !value
    )
  }
}
