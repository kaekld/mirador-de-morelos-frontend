import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { New } from '../../../../interfaces/new-interface';

@Component({
  selector: 'app-news-card',
  imports: [DatePipe],
  templateUrl: './news-card.html',
  styles: ``,
})
export class NewsCard {

  cardInfo = input.required<New>();
  cardWidth = input.required<string>();

}
