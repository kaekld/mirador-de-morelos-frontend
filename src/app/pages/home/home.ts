import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Carousel } from "../../components/carousel/carousel";

@Component({
  selector: 'app-home',
  imports: [Navbar, Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {

}
