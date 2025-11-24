import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-place-card-alt',
  imports: [],
  templateUrl: './place-card-alt.html',
  styles: ``,
})
export class PlaceCardAlt {
  placeInfo = signal<any>({
    title: "Lorem ipsum dolor sit amet.",
    category: "Cultural",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac  facilisis tellus.Maecenas pulvinar malesuada magna, vitae tristique  elit convallis sed. Aliquamtincidunt elit at lacus gravida luctus.  Quisque pretium vehicula vehicula. Nunc commodo sapien at erat mollis  eleifend. Nam efficitur risus vitae porta gravida. Donec tristique dolor vel mattis sodales.",
    img: "https://visitmorelos.mx/source/RESTAURANTES/KOOKABURRA/KOOKABURRA.jpg"
  })
}
