import { Component, inject, OnInit } from '@angular/core';
import { SearchBar } from "../../shared/components/search-bar/search-bar";
import { PlaceCard } from "../../shared/components/place-card/place-card";
import { PlacesService } from '../../shared/services/places-service';
import { PlaceMapper } from '../../shared/mapper/place-mapper';
import { Place } from '../../shared/interfaces/place-interface';
import { Footer } from '../../shared/components/footer/footer';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Sidebar } from '../../shared/components/sidebar/sidebar';

@Component({
  selector: 'app-places',
  imports: [Navbar, Sidebar, Footer, SearchBar, PlaceCard],
  templateUrl: './places.html',
  styles: ``,
})
export default class Places implements OnInit {

  placesService = inject( PlacesService );

  categories: string[] = [
    "Comida", "Social", "Cultural", "Restaurante", "Cafetería", "Bar"
  ];


  ngOnInit(): void {
    this.placesService.loadPlacesList('categoria/comida').subscribe(
      (resp) => {
        const places = PlaceMapper.mapPlaceItemsToArray(resp);
        this.placesService.placesList.set(places);
      }
    )
  }

  changePlaceList(filter: string){
    this.placesService.loadPlacesList(filter).subscribe(
        (resp) => {
          const places = PlaceMapper.mapPlaceItemsToArray(resp);
          this.placesService.placesList.set(places);
        }
      )
   }

   searchPlacesList(query: string){
    console.log(query)
    this.placesService.searchPlaceList(query).subscribe({
      next: resp => {
        const places: Place[] = []
        for(const place of resp){
          places.push({
            id: place.id,
            nombre: place.nombre,
            telefono: place.telefono,
            descripcion: place.descripcion,
            imagen: place.imagen,
            ubicacion: place.ubicacion,
            horarios: place.horarios,
            urls: place.urls,
            categories: place.categories,
            publicaciones: null
          })
        }
        this.placesService.placesList.set(places)
      }
    })
   }

}
