import { Component, inject, input, output } from '@angular/core';
import { DeletePlaceService } from '../../../../services/delete-place-service';

@Component({
  selector: 'app-confirm-delete',
  imports: [],
  templateUrl: './confirm-delete.html',
  styles: ``,
})
export class ConfirmDelete {

  deletePlaceService = inject(DeletePlaceService)

  closeModal = output<void>();
  placeId = input.required<number>()
  activedPostModal = input.required<boolean>();
  updatePlacesList = output<void>()

  emitCloseModal(){
    this.closeModal.emit()
  }

  emitUpdatePlacesList(): void {
    this.updatePlacesList.emit()
  }

  deletePlace(){
    this.deletePlaceService.deletePlace(this.placeId()).subscribe({
      next: () => {
        this.emitUpdatePlacesList()
      }
    })
  }
}
