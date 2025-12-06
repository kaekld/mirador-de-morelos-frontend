import { NgClass, DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { environment } from '@environments/environment';
import { Publicaciones } from 'src/app/shared/interfaces/mm-interfaces';

@Component({
  selector: 'app-post-modal',
  imports: [NgClass, DatePipe],
  templateUrl: './post-modal.html',
  styles: ``,
})
export class PostModal {

  imgUrl: string = `${ environment.apiUrl }/publicacion/image/`

  placeName = input.required<string>()
  postInfo = input.required<Publicaciones>();
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
