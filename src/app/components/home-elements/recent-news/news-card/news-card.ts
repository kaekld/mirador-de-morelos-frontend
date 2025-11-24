import { Component, input, signal } from '@angular/core';
import NewCard from '../../../../models/home-models/NewCard';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styles: ``,
})
export class NewsCard {

  cardInfo = input.required<NewCard>();

}
