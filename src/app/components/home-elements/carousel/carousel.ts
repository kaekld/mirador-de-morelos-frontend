import { Component, DestroyRef, inject, signal} from '@angular/core';
import BannerContent from '../../../models/home-models/Banner';
import { Banner } from "../banner/banner";
import { SlideControl } from '../slide-control/slide-control';

@Component({
  selector: 'app-carousel',
  imports: [Banner, SlideControl],
  templateUrl: './carousel.html',
})
export class Carousel {

  selectedBanner = signal(0);
  previousBanner = signal(0);

  changerClass = true;

  private timer: any;
  private readonly intervalTime = 10000;

  banners: BannerContent[] =([
    {
      title: "ENCUENTRA LOS MEJORES SITIOS DE MORELOS",
      img: "https://masdemorelos.masdemx.com/wp-content/uploads/2018/04/Manueltajintlaya-1024x678.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubia nostra, per inceptos himenaeos. Aenean sit amet lacinia eros.",
      buttonText: "Ver Lugares",
      buttonClass: "text-2xl text-white bg-red-900 font-bold inline-block w-fit px-8 py-2 rounded-xl cursor-pointer hover:bg-red-950 duration-100"
    },
    {
      title: "ENTERATE DE LO QUE ESTÁ PASANDO AQUÍ",
      img: "https://sociedad-noticias.com/wp-content/uploads/2025/07/1-3.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubia nostra, per inceptos himenaeos. Aenean sit amet lacinia eros.",
      buttonText: "Ver Noticias",
      buttonClass: "text-2xl text-white bg-blue-900 font-bold inline-block w-fit px-8 py-2 rounded-xl cursor-pointer hover:bg-red-950 duration-100"
    },
    {
      title: "NO TE PIERDAS DE LO MÁS INTERESANTE",
      img: "https://i0.wp.com/cuautlahoy.com/wp-content/uploads/2025/10/evetno-morelos.jpeg?resize=1000%2C667&ssl=1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubia nostra, per inceptos himenaeos. Aenean sit amet lacinia eros.",
      buttonText: "Ver Publicaciones",
      buttonClass: "text-2xl text-white bg-green-900 font-bold inline-block w-fit px-8 py-2 rounded-xl cursor-pointer hover:bg-red-950 duration-100"
    }
  ])


  // * Funcion para iniciar el timer
  private startTimer(): void {
    if(this.timer) {
      clearInterval(this.timer);
    }

    this.timer = setInterval(() => {
      this.nextBanner()
    }, this.intervalTime);
  }

  // * Iniciar del contador
  constructor() {
    this.startTimer();

    const destroyRef = inject(DestroyRef);

    destroyRef.onDestroy(()=>{
      clearInterval(this.timer)
    })
  }

  nextBanner(): void {
    console.log(this.selectedBanner)

    const total = this.banners.length;
    this.previousBanner.set(this.selectedBanner());

    // * Actualiza el índice del banner
    this.selectedBanner.update(current => {
        const nextValue = (current + 1) % total;
        return nextValue;
    });

    this.changerClass = !this.changerClass;

  }

  clickedBanner(banner: number): void {
    this.previousBanner.set(this.selectedBanner());

    this.selectedBanner.set(banner);

    this.changerClass = !this.changerClass;

    this.startTimer();
  }

}
