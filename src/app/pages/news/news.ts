import { Component, inject, OnInit, signal } from '@angular/core';
import { Sidebar } from "../../components/sidebar/sidebar";
import { SearchBar } from "../../components/search-bar/search-bar";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { NewsCard } from "../../components/home-elements/recent-news/news-card/news-card";
import { NewsService } from '../../services/news-service';

@Component({
  selector: 'app-news',
  imports: [Sidebar, SearchBar, Footer, Navbar, NewsCard],
  templateUrl: './news.html',
  styles: ``,
})
export default class News implements OnInit {


  categories : string[] = [
    "Sociedad", "Seguridad", "Salud", "Ciencia", "Tecnología"
  ]

  newsService = inject( NewsService )

  ngOnInit(){
    this.newsService.loadNewsList('now');
  }

  changeNewsList(filter: string): void {
    this.newsService.loadNewsList(filter);
  }

  searchNewsList(query: string): void {
    this.newsService.searchNews(query)
  }


}
