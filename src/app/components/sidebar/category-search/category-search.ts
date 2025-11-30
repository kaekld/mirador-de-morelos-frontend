import { LucideAngularModule, Search } from 'lucide-angular';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-category-search',
  imports: [LucideAngularModule],
  templateUrl: './category-search.html',
  styles: ``,
})
export class CategorySearch {

  categories = input.required<string[]>()
  categorieSelected = output<string>()
  Search = Search;

  emitCategorie(categorie: string): void {
    this.categorieSelected.emit(categorie)
  }

}
