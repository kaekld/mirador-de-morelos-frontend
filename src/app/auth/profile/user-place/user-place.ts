import { Component, input } from '@angular/core';
import { Place } from '../../../interfaces/place-interface';
import { PlaceModal } from "../../../components/home-elements/highlight-places/place-card/place-modal/place-modal";
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-user-place',
  imports: [PlaceModal],
  templateUrl: './user-place.html',
  styles: ``,
})
export class UserPlace {

  imgUrl: string = `${ environment.apiUrl }/negocio/image/`


  placeInfo = input.required<Place | null>();
  acivedPlaceModal: boolean = false;

  openPlaceModal(){

  }

  togglePlaceModal(){
    this.acivedPlaceModal = !this.acivedPlaceModal;
  }
}
