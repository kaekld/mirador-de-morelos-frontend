import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PlacePost } from '../interfaces/place-post-interface';
import { environment } from '../../environments/environment';
import { NewPlaceResponse } from '../interfaces/new-place-response';

@Injectable({
  providedIn: 'root',
})
export class NewPlaceService {

  private http = inject(HttpClient)


  sendNewPlace(formData: FormData){
    const url = `${ environment.apiUrl }/negocio/crear`
    return this.http.post<NewPlaceResponse>(url, formData)
  }
}
