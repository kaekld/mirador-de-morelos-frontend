import { Component, ElementRef, viewChild } from '@angular/core';
import { PostCard } from "./post-card/post-card";
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-recent-post',
  imports: [PostCard, LucideAngularModule],
  templateUrl: './recent-post.html',
  styles: ``,
})

export class RecentPost {
  cardsContainer = viewChild.required<ElementRef>('cardsContainer')

  ChevronLeft = ChevronLeft;
  ChevronRight = ChevronRight;

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
