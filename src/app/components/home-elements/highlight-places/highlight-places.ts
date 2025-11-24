import { Component, ElementRef, viewChild } from '@angular/core';
import { PlaceCard } from "./place-card/place-card";
import { LucideAngularModule, ChevronRight, ChevronLeft, Leaf } from 'lucide-angular';

@Component({
  selector: 'app-highlight-places',
  imports: [PlaceCard, LucideAngularModule],
  templateUrl: './highlight-places.html',
  styles: ``,
})
export class HighlightPlaces {

  cardsContainer = viewChild.required<ElementRef>('cardsContainer')

  ChevronLeft = ChevronLeft;
  ChevronRight = ChevronRight;

  scrollLeft(): void {
    this.cardsContainer().nativeElement.scrollBy({
      left: -this.cardsContainer().nativeElement.scrollWidth,
      behavior: 'smooth'
    });
  }
  scrollRight(): void {

    this.cardsContainer().nativeElement.scrollBy({
      left: this.cardsContainer().nativeElement.scrollWidth,
      behavior: 'smooth'
    });
  }

}
