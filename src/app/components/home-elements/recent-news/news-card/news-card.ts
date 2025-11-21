import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styles: ``,
})
export class NewsCard {

  newInfo = signal<any>({
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubianostra",
    img: "https://rtvnoticiasmorelos.mx/wp-content/uploads/2025/11/Copia-de-contenido-noticias-ag-51.jpg"
  })
}
