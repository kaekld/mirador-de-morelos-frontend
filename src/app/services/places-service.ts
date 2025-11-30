import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { MMResponse } from '../interfaces/mm-interfaces';
import { Place } from '../interfaces/place-interface';
import { PlaceMapper } from '../mapper/place-mapper';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {

  private http = inject(HttpClient);

  placesList = signal<Place[]>([])

  loadPlacesList(filter: string) {

    this.http.get<MMResponse[]>(`${ environment.apiUrl }/negocio/${ filter }`).subscribe(
      (resp) => {
        console.log(`${ environment.apiUrl }/negocio/${ filter }`)
        const places = PlaceMapper.mapPlaceItemsToArray(resp);
        this.placesList.set(places);
      }
    )

  }



}
