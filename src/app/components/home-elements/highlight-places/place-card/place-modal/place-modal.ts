import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { LucideAngularModule, MapPin, Phone, Instagram, Facebook } from 'lucide-angular';

@Component({
  selector: 'app-place-modal',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './place-modal.html',
  styles: ``,
})
export class PlaceModal {

  placeInfo = input.required<any>();
  activedModal = input.required<boolean>();
  closeModal = output<void>();
  fadeOut: boolean = false;

  MapPin = MapPin;
  Phone = Phone;
  Instagram = Instagram;
  Facebook = Facebook;

  emitCloseModal(): void {
    this.fadeOut = true;

    setTimeout(() => {
      this.fadeOut = false;
      this.closeModal.emit();
    },500)
  }

}
