import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '@environments/environment';
import { New } from '../../interfaces/new-interface';

@Component({
  selector: 'app-news-card',
  imports: [DatePipe,RouterLink],
  templateUrl: './news-card.html',
  styles: ``,
})
export class NewsCard {

  imgUrl: string = `${ environment.apiUrl }/noticia/image/`

  cardInfo = input.required<New>();
  cardWidth = input.required<string>();

}
