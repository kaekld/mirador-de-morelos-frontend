import { LucideAngularModule, Search } from 'lucide-angular';
import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-category-search',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './category-search.html',
  styles: ``,
})
export class CategorySearch {

  categories = input.required<string[]>()
  categorieSelected = output<string>()
  selectionControl = input.required<string>()
  Search = Search;

  emitCategorie(categorie: string): void {
    this.categorieSelected.emit(categorie)
  }

}
