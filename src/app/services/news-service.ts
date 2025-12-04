import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { NewResponse } from '../interfaces/new-response';
import { environment } from '../../environments/environment';
import { New } from '../interfaces/new-interface';
import { NewMapper } from '../mapper/new-mapper';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private http = inject(HttpClient);

  newsList = signal<New[]>([])
  newEntry = signal<New | null>(null)

  loadNewsList(filter: string) {
    this.http.get<NewResponse[]>(`${ environment.apiUrl }/noticia/${ filter }`).subscribe(
      (resp) => {
        const news = NewMapper.mapNewsItemsToArray(resp);
        this.newsList.set(news)
      }
    )
  }

  loadNewEntry(id: string) {
    this.http.get<NewResponse>(`${ environment.apiUrl }/noticia/id/${ id }`).subscribe(
      (resp) => {
        const newEntry = NewMapper.mapNewItemToNew(resp)
        this.newEntry.set(newEntry)
      }
    )
  }

  searchNews(title: string){
    const url = `${ environment.apiUrl }/noticia/filterByTitulo/${title}`
    this.http.get<NewResponse[]>(url).subscribe({
      next: (resp => {
        const news = NewMapper.mapNewsItemsToArray(resp);
        this.newsList.set(news)
      })
    })

  }

}
