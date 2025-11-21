import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Carousel } from "../../components/home-elements/carousel/carousel";
import { RecentNews } from "../../components/home-elements/recent-news/recent-news";
import { HighlightPlaces } from "../../components/home-elements/highlight-places/highlight-places";

@Component({
  selector: 'app-home',
  imports: [Navbar, Carousel, RecentNews, HighlightPlaces],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {

}
