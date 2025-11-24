import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Carousel } from "../../components/home-elements/carousel/carousel";
import { RecentNews } from "../../components/home-elements/recent-news/recent-news";
import { HighlightPlaces } from "../../components/home-elements/highlight-places/highlight-places";
import { RecentPost } from "../../components/home-elements/recent-post/recent-post";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Carousel, RecentNews, HighlightPlaces, RecentPost, Footer],
  templateUrl: './home.html',
})
export default class Home {

}
