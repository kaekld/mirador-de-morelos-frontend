import { LucideAngularModule, Search } from 'lucide-angular';
import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-municipios-search',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './municipios-search.html',
  styles: ``,
})
export class MunicipiosSearch {

  municipios = input.required<string[]>()
  municipioSelected = output<string>()
  selectionControl = input.required<string>()
  Search = Search;

  emitMunicipio(municipio: string): void {
    this.municipioSelected.emit(municipio);
  }

}
