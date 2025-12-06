import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Place } from 'src/app/shared/interfaces/place-interface';
import { UserPlaceMapper } from '../mapper/user-place-mapper';
import { UserPlace } from '../../auth/interfaces/user-place-response';

@Injectable({
  providedIn: 'root',
})
export class UserPlaceService {

  private http = inject(HttpClient)
  userPlacesList = signal<Place[]>([])

  loadUserPlacesList(id: string){
    this.http.get<UserPlace[]>(`${ environment.apiUrl }/negocio/usuario/${ id }`).subscribe(
      (resp) => {
        const places = UserPlaceMapper.mapPlaceItemsToArray(resp)
        this.userPlacesList.set(places)
      }
    )
  }

}
