import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { New } from '../../../../interfaces/new-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-card',
  imports: [DatePipe,RouterLink],
  templateUrl: './news-card.html',
  styles: ``,
})
export class NewsCard {

  cardInfo = input.required<New>();
  cardWidth = input.required<string>();

}
