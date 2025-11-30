import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { PlaceCard } from "./place-card/place-card";
import { LucideAngularModule, ChevronRight, ChevronLeft, Leaf } from 'lucide-angular';
import { PlacesService } from '../../../services/places-service';
import { Place } from '../../../interfaces/place-interface';

@Component({
  selector: 'app-highlight-places',
  imports: [PlaceCard, LucideAngularModule],
  templateUrl: './highlight-places.html',
  styles: ``,
})
export class HighlightPlaces {
  placesService = inject( PlacesService );

  cardsContainer = viewChild.required<ElementRef>('cardsContainer')

  ChevronLeft = ChevronLeft;
  ChevronRight = ChevronRight;

  ngOnInit(): void {
    this.placesService.loadPlacesList('categoria/comida');
  }

  highLightPlaces = computed<Place[]>(() => {
    const fullList = this.placesService.placesList();
    return fullList.slice(1, 4);
  });

}
