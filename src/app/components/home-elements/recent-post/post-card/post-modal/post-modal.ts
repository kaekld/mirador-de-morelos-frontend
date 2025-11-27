import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-post-modal',
  imports: [NgClass],
  templateUrl: './post-modal.html',
  styles: ``,
})
export class PostModal {

  activedPostModal = input.required<boolean>();
  closePostModal = output<void>();
  fadeOut: boolean = false;

  emitCLoseModal(): void {
    this.fadeOut = true;
    setTimeout(()=>{
      this.fadeOut = false
      this.closePostModal.emit();
    },500)
  }


}
