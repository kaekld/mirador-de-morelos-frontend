import { Component } from '@angular/core';
import { PlaceCard } from "./place-card/place-card";
import { LucideAngularModule, ChevronRight, ChevronLeft } from 'lucide-angular';

@Component({
  selector: 'app-highlight-places',
  imports: [PlaceCard, LucideAngularModule],
  templateUrl: './highlight-places.html',
  styles: ``,
})
export class HighlightPlaces {
  ChevronLeft = ChevronLeft;
  ChevronRight = ChevronRight;
}
