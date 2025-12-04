import { Component, output } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-search-bar',
  imports: [LucideAngularModule],
  templateUrl: './search-bar.html',
  styles: ``,
})
export class SearchBar {
  Search = Search;
  querySearch = output<string>()

  onSearch(query: string){
    this.querySearch.emit(query)
  }

}
