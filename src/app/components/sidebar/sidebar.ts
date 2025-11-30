import { Component, input, output } from '@angular/core';
import { MunicipiosSearch } from "./municipios-search/municipios-search";
import { CategorySearch } from "./category-search/category-search";

@Component({
  selector: 'app-sidebar',
  imports: [MunicipiosSearch, CategorySearch],
  templateUrl: './sidebar.html',
  styles: ``,
})
export class Sidebar {

  categories = input.required<string[]>()
  selection = output<string>();

  municipiosMorelos: string[] = [
    "Amacuzac", "Atlatlahucan", "Axochiapan", "Ayala", "Cuautla"
  ];

  defaultMunicipios: string[] = this.municipiosMorelos.slice(1, 10);

  emitCategorie(value: string): void {
    this.selection.emit(`categoria/${value.toLowerCase()}`)
  }
  emitMunicipio(value: string): void {
    this.selection.emit(`municipio/${value}`)
  }

}
