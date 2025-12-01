import { Component, input, signal } from '@angular/core';
import { PlaceModal } from "./place-modal/place-modal";
import { Place } from '../../../../interfaces/place-interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-place-card',
  imports: [PlaceModal],
  templateUrl: './place-card.html',
  styles: ``,
})
export class PlaceCard {

  imgUrl: string = `${ environment.apiUrl }/negocio/image/`
  placeInfo = input.required<Place>();

  acivedPlaceModal: boolean = false;

  openPlaceModal(): void {
    this.acivedPlaceModal = true;
  }

  closePlaceModal(): void {
    this.acivedPlaceModal = false;
  }
}
