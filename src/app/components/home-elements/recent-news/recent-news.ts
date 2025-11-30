import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { NewsCard } from "./news-card/news-card";
import { LucideAngularModule, ChevronRight, ChevronLeft } from 'lucide-angular';
import NewCard from '../../../models/NewCard';
import { NewsService } from '../../../services/news-service';

@Component({
  selector: 'app-recent-news',
  imports: [LucideAngularModule, NewsCard],
  templateUrl: './recent-news.html',
  styles: ``,
})
export class RecentNews implements OnInit{

  cardsContainer = viewChild.required<ElementRef>('cardsContainer');

  // * Iconos
  ChevronRight = ChevronRight;
  ChevronLeft = ChevronLeft;

  newsService = inject( NewsService )

  ngOnInit(){
    this.newsService.loadNewsList('now');
    console.log(this.newsService.newsList())
  }

  scrollLeft(): void {
    this.cardsContainer().nativeElement.scrollBy({
      left: -500,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.cardsContainer().nativeElement.scrollBy({
      left: 500,
      behavior: 'smooth'
    });
  }
}
