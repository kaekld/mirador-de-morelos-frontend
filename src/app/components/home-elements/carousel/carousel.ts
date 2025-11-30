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
      title: "ENCUENTRA LOS MEJORES LUGARES",
      img: "https://masdemorelos.masdemx.com/wp-content/uploads/2018/04/Manueltajintlaya-1024x678.jpg",
      description: "Morelos te invita a explorar su riqueza histórica y natural. Desde la imponente zona arqueológica de Xochicalco, Patrimonio de la Humanidad, hasta la belleza colonial de Tepoztlán, encuentra los mejores negocios, restaurantes y servicios cerca de los puntos más emblemáticos del estado.",
      buttonText: "Ver Lugares",
      buttonClass: "text-2xl text-white bg-red-900 font-bold inline-block w-fit px-8 py-2 rounded-xl cursor-pointer hover:bg-red-950 duration-100",
      path: "/places"
    },
    {
      title: "ENTERATE DE TODO LO QUE ESTÁ PASANDO",
      img: "https://sociedad-noticias.com/wp-content/uploads/2025/07/1-3.webp",
      description: "Infórmate sobre los acontecimientos más importantes en Morelos. Conoce las últimas novedades sobre cultura, política local, eventos de seguridad y desarrollo comunitario en Cuernavaca, Cuautla y todos los municipios. ¡No te pierdas de lo que está sucediendo en tu entorno!",
      buttonText: "Ver Noticias",
      buttonClass: "text-2xl text-white bg-blue-900 font-bold inline-block w-fit px-8 py-2 rounded-xl cursor-pointer hover:bg-red-950 duration-100",
      path: "/news"
    },
    {
      title: "NO TE PIERDAS DE NINGUNA PUBLICACIÓN",
      img: "https://i0.wp.com/cuautlahoy.com/wp-content/uploads/2025/10/evetno-morelos.jpeg?resize=1000%2C667&ssl=1",
      description: "Explora las publicaciones más recientes de tus negocios favoritos. Encuentra promociones exclusivas, anuncios de eventos, nuevos productos y noticias directas de restaurantes, tiendas y servicios. Descubre lo que la comunidad local tiene para ofrecerte.",
      buttonText: "Ver Publicaciones",
      buttonClass: "text-2xl text-white bg-green-900 font-bold inline-block w-fit px-8 py-2 rounded-xl cursor-pointer hover:bg-red-950 duration-100",
      path: "/posts"
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
