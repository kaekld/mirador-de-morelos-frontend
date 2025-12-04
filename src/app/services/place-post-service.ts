import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Publicaciones } from '../interfaces/mm-interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlacePostService {

  private http = inject(HttpClient)
  placesPosts = signal<Publicaciones[]>([])

  loadPostsList(userId: number | null | undefined){
    this.http.get<Publicaciones[]>(`${ environment.apiUrl }/publicacion/negocio/${ userId }`).subscribe(
      (resp) => {
        this.placesPosts.set(resp)
      }
    )
  }
}
