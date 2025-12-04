import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewPostService {

  private http = inject(HttpClient)

  sendNewPost(formData: FormData) {
    const url = `${ environment.apiUrl }/publicacion/nueva`
    return this.http.post(url, formData)
  }

}
