import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Banner } from "../../components/banner/banner";

@Component({
  selector: 'app-home',
  imports: [Navbar, Banner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {

}
