import { Component} from '@angular/core';
import BannerContent from '../../models/Banner';
import { Banner } from "../banner/banner";

@Component({
  selector: 'app-carousel',
  imports: [Banner],
  templateUrl: './carousel.html',
})
export class Carousel {

  selectedBanner : number = 0;

  banners: BannerContent[] =([
    {
      title: "ENCUENTRA LOS MEJORES SITIOS DE MORELOS",
      img: "https://masdemorelos.masdemx.com/wp-content/uploads/2018/04/Manueltajintlaya-1024x678.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubia nostra, per inceptos himenaeos. Aenean sit amet lacinia eros.",
      buttonText: "Ver Lugares",
      buttonClass: "text-2xl text-white bg-red-900 font-bold inline-block w-fit px-8 py-2 rounded-xl cursor-pointer hover:bg-red-950 duration-100"
    },
    {
      title: "ENTERATE DE LO QUE ESTÁ PASANDO EN MORELOS",
      img: "https://sociedad-noticias.com/wp-content/uploads/2025/07/1-3.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubia nostra, per inceptos himenaeos. Aenean sit amet lacinia eros.",
      buttonText: "Ver Noticias",
      buttonClass: "text-2xl text-white bg-red-900 font-bold inline-block w-fit px-8 py-2 rounded-xl cursor-pointer hover:bg-red-950 duration-100"
    },
    {
      title: "NO TE PIERDAS DE LO MÁS INTERESANTE DE MORELOS",
      img: "https://i0.wp.com/cuautlahoy.com/wp-content/uploads/2025/10/evetno-morelos.jpeg?resize=1000%2C667&ssl=1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubia nostra, per inceptos himenaeos. Aenean sit amet lacinia eros.",
      buttonText: "Ver Publicaciones",
      buttonClass: "text-2xl text-white bg-green-900 font-bold inline-block w-fit px-8 py-2 rounded-xl cursor-pointer hover:bg-red-950 duration-100"
    }
  ])

}
