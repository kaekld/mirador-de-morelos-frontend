import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';
import { PostCard } from '../../../../shared/components/post-card/post-card';
import { PlaceMapper } from '../../../../shared/mapper/place-mapper';
import { PlacesService } from '../../../../shared/services/places-service';

@Component({
  selector: 'app-recent-post',
  imports: [PostCard, LucideAngularModule],
  templateUrl: './recent-post.html',
  styles: ``,
})

export class RecentPost implements OnInit {
  cardsContainer = viewChild.required<ElementRef>('cardsContainer')
  placesService = inject( PlacesService );

  ChevronLeft = ChevronLeft;
  ChevronRight = ChevronRight;

  ngOnInit(){
    this.placesService.loadPlacesList('categoria/comida').subscribe(
      (resp) => {
        const places = PlaceMapper.mapPlaceItemsToArray(resp);
        this.placesService.placesList.set(places);
      }
    )
  }

  scrollLeft(): void {
    this.cardsContainer().nativeElement.scrollBy({
      left: -500,
      behavior: 'smooth'
    })
  }

  scrollRight(): void {
    this.cardsContainer().nativeElement.scrollBy({
      left: 500,
      behavior: 'smooth'
    })
  }
}
