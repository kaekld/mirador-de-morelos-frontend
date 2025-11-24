import { Component } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule],
  templateUrl: './sidebar.html',
  styles: ``,
})
export class Sidebar {

  municipiosMorelos: string[] = [
    "Amacuzac",
    "Atlatlahucan",
    "Axochiapan",
    "Ayala",
    "Coatlán del Río",
    "Cuautla",
    "Cuernavaca",
    "Emiliano Zapata",
    "Huitzilac",
    "Jantetelco",
    "Jojutla",
    "Jonacatepec",
    "Mazatepec",
    "Miacatlán",
    "Mixquiala",
    "Ocuituco",
    "Puente de Ixtla",
    "Temixco",
    "Temoac",
    "Tepalcingo",
    "Tepoztlán",
    "Tetecala",
    "Tetela del Volcán",
    "Tlalnepantla",
    "Tlaltizapán",
    "Tlaquiltenango",
    "Tlayacapan",
    "Totolapan",
    "Xochitepec",
    "Yautepec",
    "Yecapixtla",
    "Zacatepec",
    "Zacualpan de Amilpas",
    "Hueyapan",
    "Xoxocotla",
    "Coatetelco"
  ];

  Search = Search;

}
