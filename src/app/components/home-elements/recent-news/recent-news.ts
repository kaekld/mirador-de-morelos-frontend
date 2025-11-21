import { Component } from '@angular/core';
import { NewsCard } from "./news-card/news-card";
import { LucideAngularModule, ChevronRight, ChevronLeft } from 'lucide-angular';

@Component({
  selector: 'app-recent-news',
  imports: [NewsCard, LucideAngularModule],
  templateUrl: './recent-news.html',
  styles: ``,
})
export class RecentNews {
  ChevronRight = ChevronRight;
  ChevronLeft = ChevronLeft;
}
