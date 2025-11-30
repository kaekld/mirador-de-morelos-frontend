import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Footer } from "../../components/footer/footer";
import { SearchBar } from "../../components/search-bar/search-bar";
import { PlaceCard } from "../../components/home-elements/highlight-places/place-card/place-card";
import { MunicipioBanner } from "../../components/municipio-banner/municipio-banner";
import { PlacesService } from '../../services/places-service';

@Component({
  selector: 'app-places',
  imports: [Navbar, Sidebar, Footer, SearchBar, PlaceCard, MunicipioBanner],
  templateUrl: './places.html',
  styles: ``,
})
export default class Places implements OnInit {

  placesService = inject( PlacesService );

  categories: string[] = [
    "Comida", "Social", "Cultural", "Restaurante", "Cafetería", "Bar"
  ];


  ngOnInit(): void {
    this.placesService.loadPlacesList('categoria/comida');
  }

  changePlaceList(filter: string){
    this.placesService.loadPlacesList(filter);
  }

}
