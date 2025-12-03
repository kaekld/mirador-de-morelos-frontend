import { Component, inject, input, output } from '@angular/core';
import { DeletePostService } from '../../../../services/delete-post-service';

@Component({
  selector: 'app-confirm-delete-post',
  imports: [],
  templateUrl: './confirm-delete-post.html',
  styles: ``,
})
export class ConfirmDeletePost {

  deletePostService = inject( DeletePostService )

  closeModal = output<void>();
  postId = input.required<number>()
  activedPostModal = input.required<boolean>();

  emitCloseModal(){
    this.closeModal.emit()
  }

  deletePost(): void {
    this.deletePostService.deletePost(this.postId())
  }

}
