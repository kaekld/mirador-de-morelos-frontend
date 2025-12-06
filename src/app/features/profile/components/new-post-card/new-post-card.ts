import { Component, input, output, signal } from '@angular/core';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { NewPostForm } from "./new-post-form/new-post-form";
@Component({
  selector: 'app-new-post-card',
  imports: [LucideAngularModule, NewPostForm],
  templateUrl: './new-post-card.html',
  styles: ``,
})
export class NewPostCard {

  placeId = input.required<number | null | undefined>()

  Plus = Plus;
  cardWidth = input.required<string>();
  activedNewPostModal = signal<boolean>(false);

  updatePostCards = output<void>()

  toggleActivedNewPostModal(): void {
    this.activedNewPostModal.update(
      (value) => !value
    )
  }

  emitUpdatePostCards(): void {
    this.updatePostCards.emit()
  }

}
