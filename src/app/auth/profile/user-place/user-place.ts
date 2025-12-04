import { Component, input, output, signal } from '@angular/core';
import { Place } from '../../../interfaces/place-interface';
import { PlaceModal } from "../../../components/home-elements/highlight-places/place-card/place-modal/place-modal";
import { environment } from '../../../../environments/environment';
import { ConfirmDelete } from "./confirm-delete/confirm-delete";

@Component({
  selector: 'app-user-place',
  imports: [PlaceModal, ConfirmDelete],
  templateUrl: './user-place.html',
  styles: ``,
})
export class UserPlace {

  imgUrl: string = `${ environment.apiUrl }/negocio/image/`


  placeInfo = input.required<Place | null>();
  acivedPlaceModal = signal<boolean>(false);
  activedConfirmModal = signal<boolean>(false);
  updatePlacesList = output<void>()

  togglePlaceModal(): void{
    this.acivedPlaceModal.update(
      value => !value
    )
  }

  emitUpdatePlacesList(): void {
    this.updatePlacesList.emit()
  }

  toggleConfirmModal(): void {
    this.activedConfirmModal.update(
      value => !value
    )
  }
}
