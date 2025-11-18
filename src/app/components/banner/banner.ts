import { Component, signal } from '@angular/core';

export interface BannerContent {
  title: string,
  img: string,
  description: string,
  buttonText: string,
  buttonClass: string
}

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
})
export class Banner {

  
  banners = signal<BannerContent[]>([
    {
      title: "ENCUENTRA LOS MEJORES SITIOS DE MORELOS",
      img: "https://masdemorelos.masdemx.com/wp-content/uploads/2018/04/Manueltajintlaya-1024x678.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus  erat, facilisis eu lobortis id, interdum nec libero. In feugiat consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per  conubia nostra, per inceptos himenaeos. Aenean sit amet lacinia eros.",
      buttonText: "Ver Lugares",
      buttonClass: "text-2xl text-white bg-red-900 font-bold inline-block w-fit px-8 py-2 rounded-xl cursor-pointer hover:bg-red-950 duration-100"
    }
  ])
}
