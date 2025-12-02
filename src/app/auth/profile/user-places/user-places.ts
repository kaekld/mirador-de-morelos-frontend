import { Component, inject, output } from '@angular/core';
import { UserPlaceService } from '../../../services/user-place-service';

@Component({
  selector: 'app-user-places',
  imports: [],
  templateUrl: './user-places.html',
  styles: ``,
})
export class UserPlaces {

  userPlacesService = inject( UserPlaceService )
  newPlace = output<void>()
  placeName = output<string>();

  emitPlaceName(placename: string): void {
    this.placeName.emit(placename)
  }

  emitNewPlace(){
    this.newPlace.emit()
  }
}
