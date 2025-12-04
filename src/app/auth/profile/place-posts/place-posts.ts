import { Component, computed, effect, inject, input, signal } from '@angular/core';
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
export class PlacePosts {

  placePostsService = inject(PlacePostService)
  placeId = input.required<number | null | undefined>();

  activeModalIds = signal<Set<number>>(new Set());

  reversedPosts = computed(() => {
    const posts = this.placePostsService.placesPosts();
    return [...posts].reverse();
  });

  constructor() {
    effect(() => {
      this.placePostsService.loadPostsList(this.placeId());
    });
  }

  toggleActivedConfirmModal(postId: number): void {
    const currentIds = new Set(this.activeModalIds());

    if (currentIds.has(postId)) {
      currentIds.delete(postId);
    } else {
      currentIds.add(postId);
    }

    this.activeModalIds.set(currentIds);
  }

  isModalActive(postId: number): boolean {
    return this.activeModalIds().has(postId);
  }

  updatePosts(): void {
    this.placePostsService.loadPostsList(this.placeId());
  }

}
