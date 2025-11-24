import { Component } from '@angular/core';
import { MunicipiosSearch } from "./municipios-search/municipios-search";
import { CategorySearch } from "./category-search/category-search";

@Component({
  selector: 'app-sidebar',
  imports: [MunicipiosSearch, CategorySearch],
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

  categories: string[] = [
    "Comida",
    "Alojamiento",
    "Turismo",
    "Salud",
    "Compras",
    "Escuela",
    "Deporte",
    "Finanzas",
    "Transporte",
    "Cultura",
    "Fiesta",
    "Naturaleza",
    "Servicios",
    "Gobierno",
    "Religión",
    "Talleres",
    "Reparación",
    "Mascotas",
    "Eventos",
    "Belleza",
    "Tecnología",
    "Hogar",
    "Legal",
    "Moda"
  ];

  defaultMunicipios: string[] = this.municipiosMorelos.slice(1,10)
  defaultCategories: string[] = this.categories.slice(1,10)

}
