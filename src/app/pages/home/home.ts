import { Component, inject } from '@angular/core';
import { Carousel } from "../../features/home/components/carousel/carousel";
import { RecentNews } from "../../features/home/components/recent-news/recent-news";
import { HighlightPlaces } from "../../features/home/components/highlight-places/highlight-places";
import { RecentPost } from '../../features/home/components/recent-post/recent-post';
import { Footer } from '../../shared/components/footer/footer';
import { Navbar } from '../../shared/components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar, Carousel, RecentNews, HighlightPlaces, RecentPost, Footer],
  templateUrl: './home.html',
})
export default class Home {

}
