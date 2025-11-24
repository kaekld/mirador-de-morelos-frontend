import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Footer } from "../../components/footer/footer";
import { MunicipioBanner } from "../../components/places-elements/municipio-banner/municipio-banner";
import { SearchBar } from "../../components/search-bar/search-bar";
import { PlaceCardAlt } from "../../components/places-elements/place-card-alt/place-card-alt";

@Component({
  selector: 'app-places',
  imports: [Navbar, Sidebar, Footer, MunicipioBanner, SearchBar, PlaceCardAlt],
  templateUrl: './places.html',
  styles: ``,
})
export default class Places {

}
