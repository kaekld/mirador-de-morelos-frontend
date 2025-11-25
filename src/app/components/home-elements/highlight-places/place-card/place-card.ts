import { Component, signal } from '@angular/core';
import { LucideAngularModule, MapPin, Phone, Instagram, Facebook } from 'lucide-angular';

@Component({
  selector: 'app-place-card',
  imports: [LucideAngularModule],
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

  activeModal: boolean = false;
  fadeOut: boolean = false;

  MapPin = MapPin;
  Phone = Phone;
  Instagram = Instagram;
  Facebook = Facebook;

  openModal(): void {
    this.activeModal = true;
    console.log(this.activeModal);
  }
  closeModal(): void {
    this.activeModal = false;
  }
}
