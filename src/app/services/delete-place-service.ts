import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeletePlaceService {

  private http = inject(HttpClient)

  deletePlace(userId: number){
    const url = `${ environment.apiUrl }/negocio/delete/${userId}`
    return this.http.delete(url)
  }
}
