import { Component, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { SearchBar } from "../../components/search-bar/search-bar";
import { Footer } from "../../components/footer/footer";
import { PostCard } from "../../components/home-elements/recent-post/post-card/post-card";
import { PlacesService } from '../../services/places-service';

@Component({
  selector: 'app-posts',
  imports: [Navbar, Sidebar, SearchBar, Footer, PostCard],
  templateUrl: './posts.html',
  styles: ``,
})
export default class Posts {
  placesService = inject( PlacesService );

  categories: string[] = [
    "Comida", "Social", "Cultural", "Restaurante", "Cafetería", "Bar"
  ];

  ngOnInit(): void {
    this.placesService.loadPlacesList('categoria/comida');
  }

  changePlaceList(searchParams: string){
    this.placesService.loadPlacesList(searchParams);
  }

}
