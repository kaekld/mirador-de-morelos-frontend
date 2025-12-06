import { Component, inject, OnInit, signal } from '@angular/core';
import { SearchBar } from "../../shared/components/search-bar/search-bar";
import { NewsService } from '../../shared/services/news-service';
import { Footer } from '../../shared/components/footer/footer';
import { Navbar } from '../../shared/components/navbar/navbar';
import { NewsCard } from '../../shared/components/news-card/news-card';
import { Sidebar } from '../../shared/components/sidebar/sidebar';

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
