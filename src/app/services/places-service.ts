import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { MMResponse } from '../interfaces/mm-interfaces';
import { Place } from '../interfaces/place-interface';
import { PlaceMapper } from '../mapper/place-mapper';
import { PostInfo } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {

  private http = inject(HttpClient);

  placesList = signal<Place[]>([])

  loadPlacesList(filter: string) {

    return this.http.get<MMResponse[]>(`${ environment.apiUrl }/negocio/${ filter }`)

  }

  searchPostList(query: string){
    return this.http.get<PostInfo[]>(`${ environment.apiUrl }/publicacion/filterByTitulo/${ query }`)
  }

  searchPlaceList(query: string){
    return this.http.get<Place[]>(`${ environment.apiUrl }/negocio/filterByNombre/${ query }`)
  }



}
