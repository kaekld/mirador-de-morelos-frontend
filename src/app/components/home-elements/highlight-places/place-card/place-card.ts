import { Component, signal } from '@angular/core';
import { PlaceModal } from "./place-modal/place-modal";

@Component({
  selector: 'app-place-card',
  imports: [PlaceModal],
  templateUrl: './place-card.html',
  styles: ``,
})
export class PlaceCard {

  placeInfo = signal<any>({
    title: "Lorem ipsum dolor sit amet.",
    category: "Cultural",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac  facilisis tellus.Maecenas pulvinar malesuada magna, vitae tristique  elit convallis sed. Aliquamtincidunt elit at lacus gravida luctus.  Quisque pretium vehicula vehicula. Nunc commodo sapien at erat mollis  eleifend. Nam efficitur risus vitae porta gravida. Donec tristique dolor vel mattis sodales.",
    img: "https://visitmorelos.mx/source/RESTAURANTES/KOOKABURRA/KOOKABURRA.jpg"
  })

  acivedPlaceModal: boolean = false;

  openPlaceModal(): void {
    this.acivedPlaceModal = true;
  }

  closePlaceModal(): void {
    this.acivedPlaceModal = false;
  }
}
