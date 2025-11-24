import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Footer } from "../../components/footer/footer";
import { PlaceCard } from "../../components/home-elements/highlight-places/place-card/place-card";

@Component({
  selector: 'app-places',
  imports: [Navbar, Sidebar, Footer, PlaceCard],
  templateUrl: './places.html',
  styles: ``,
})
export default class Places {

}
