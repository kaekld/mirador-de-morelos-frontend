import { Component, ElementRef, viewChild } from '@angular/core';
import { NewsCard } from "./news-card/news-card";
import { LucideAngularModule, ChevronRight, ChevronLeft } from 'lucide-angular';

@Component({
  selector: 'app-recent-news',
  imports: [NewsCard, LucideAngularModule],
  templateUrl: './recent-news.html',
  styles: ``,
})
export class RecentNews {

  cardsContainer = viewChild.required<ElementRef>('cardsContainer');

  // * Iconos
  ChevronRight = ChevronRight;
  ChevronLeft = ChevronLeft;

  scrollLeft(): void {
    this.cardsContainer().nativeElement.scrollBy({
      left: -325,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.cardsContainer().nativeElement.scrollBy({
      left: 325,
      behavior: 'smooth'
    });
  }
}
