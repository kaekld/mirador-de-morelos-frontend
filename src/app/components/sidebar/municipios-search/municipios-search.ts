import { LucideAngularModule, Search } from 'lucide-angular';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-municipios-search',
  imports: [LucideAngularModule],
  templateUrl: './municipios-search.html',
  styles: ``,
})
export class MunicipiosSearch {

  municipios = input.required<string[]>()
  Search = Search;

  emitMunicipio(municipio: string): void {
    console.log(municipio)
  }

}
