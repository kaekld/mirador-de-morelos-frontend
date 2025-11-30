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

  loadNewsList(filter: string) {

    this.http.get<NewResponse[]>(`${ environment.apiUrl }/noticia/${ filter }`).subscribe(
      (resp) => {

        console.log(`${ environment.apiUrl }/noticia/${ filter }`)
        const news = NewMapper.mapNewsItemsToArray(resp);
        this.newsList.set(news)

      }
    )

  }
}
