import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styles: ``,
})
export class PostCard {
  postInfo = signal<any>({
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi minima nobis sequi eaque iste soluta possimus, amet laudantium illum rem, labore veniam officia! Ullam.",
    img: "https://masdemorelos.masdemx.com/wp-content/uploads/2018/04/Manueltajintlaya-1024x678.jpg",
    date: "20 de noviembre"
  })
}
