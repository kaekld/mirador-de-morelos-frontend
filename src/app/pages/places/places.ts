import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Footer } from "../../components/footer/footer";
import { SearchBar } from "../../components/search-bar/search-bar";
import { PlaceCard } from "../../components/home-elements/highlight-places/place-card/place-card";
import { MunicipioBanner } from "../../components/municipio-banner/municipio-banner";

@Component({
  selector: 'app-places',
  imports: [Navbar, Sidebar, Footer, SearchBar, PlaceCard, MunicipioBanner],
  templateUrl: './places.html',
  styles: ``,
})
export default class Places {

}
