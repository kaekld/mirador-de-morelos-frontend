import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NewPlaceResponse } from '../../auth/interfaces/new-place-response';
import { environment } from '@environments/environment';

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
 