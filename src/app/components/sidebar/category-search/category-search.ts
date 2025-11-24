import { LucideAngularModule, Search } from 'lucide-angular';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category-search',
  imports: [LucideAngularModule],
  templateUrl: './category-search.html',
  styles: ``,
})
export class CategorySearch {

  categories = input.required<string[]>()

  Search = Search;
}
