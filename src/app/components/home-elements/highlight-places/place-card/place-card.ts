import { Component, input, signal } from '@angular/core';
import { PlaceModal } from "./place-modal/place-modal";
import { Place } from '../../../../interfaces/place-interface';

@Component({
  selector: 'app-place-card',
  imports: [PlaceModal],
  templateUrl: './place-card.html',
  styles: ``,
})
export class PlaceCard {

  placeInfo = input.required<Place>();

  acivedPlaceModal: boolean = false;

  openPlaceModal(): void {
    this.acivedPlaceModal = true;
  }

  closePlaceModal(): void {
    this.acivedPlaceModal = false;
  }
}
