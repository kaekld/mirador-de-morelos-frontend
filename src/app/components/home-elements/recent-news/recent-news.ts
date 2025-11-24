import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { NewsCard } from "./news-card/news-card";
import { LucideAngularModule, ChevronRight, ChevronLeft } from 'lucide-angular';
import NewCard from '../../../models/home-models/NewCard';

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

  newInfo = signal<NewCard[]>([]);

  constructor(){
    this.newInfo.set (
      [
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubianostra",
          img: "https://rtvnoticiasmorelos.mx/wp-content/uploads/2025/11/Copia-de-contenido-noticias-ag-51.jpg",
          date: "22 de noviembre"
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubianostra",
          img: "https://www.diariodemorelos.com/noticias/sites/default/files/styles/image_1170x660/public/field/image/checadores_0.jpg?itok=t39xKKST",
          date: "22 de noviembre"
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubianostra",
          img: "https://rtvnoticiasmorelos.mx/wp-content/uploads/2025/11/Copia-de-contenido-noticias-ag-71.jpg",
          date: "22 de noviembre"
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubianostra",
          img: "https://morelos.quadratin.com.mx/www/wp-content/uploads/2025/11/5e048960-9e24-47b6-a2a8-095b711c6732-316x200.jpeg",
          date: "22 de noviembre"
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubianostra",
          img: "https://ineditonoticias.com/storage/posts/aRU1PE4kWCnEQEH3hEpoYQrwlUYAhP1zZevgS7Va.webp",
          date: "22 de noviembre"
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubianostra",
          img: "https://morelos.quadratin.com.mx/www/wp-content/uploads/2025/11/IMG_6579-316x194.webp",
          date: "22 de noviembre"
        }
      ]
    )
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
