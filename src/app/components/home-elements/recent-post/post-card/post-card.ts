import { Component, input, signal } from '@angular/core';
import { PostModal } from "./post-modal/post-modal";
import { Publicaciones } from '../../../../interfaces/mm-interfaces';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-post-card',
  imports: [PostModal],
  templateUrl: './post-card.html',
  styles: ``,
})
export class PostCard {

  imgUrl: string = `${ environment.apiUrl }/publicacion/image/`

  placeName = input.required<string>()
  postInfo = input.required<Publicaciones>();
  cardWidth = input.required<string>();
  activedPostModal: boolean = false;

  togglePostModal(): void {
    this.activedPostModal = !this.activedPostModal;
  }


}
