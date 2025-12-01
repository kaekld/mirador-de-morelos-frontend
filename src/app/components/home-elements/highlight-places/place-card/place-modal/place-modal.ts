import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { LucideAngularModule, MapPin, Phone, Instagram, Facebook, Calendar, ChevronDown, House } from 'lucide-angular';
import { Place } from '../../../../../interfaces/place-interface';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-place-modal',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './place-modal.html',
  styles: ``,
})
export class PlaceModal {

  imgUrl: string = `${ environment.apiUrl }/negocio/image/`

  placeInfo = input.required<Place | null>();
  activedModal = input.required<boolean>();
  closeModal = output<void>();
  fadeOut: boolean = false;
  showSchedule: boolean = false;

  MapPin = MapPin;
  Phone = Phone;
  Instagram = Instagram;
  Facebook = Facebook;
  Calendar = Calendar;
  ChevronDown = ChevronDown;
  House = House;

  emitCloseModal(): void {
    this.fadeOut = true;

    setTimeout(() => {
      this.fadeOut = false;
      this.closeModal.emit();
    },500)
  }

  toggleSchedule(): void {
    this.showSchedule = !this.showSchedule;
  }

}
