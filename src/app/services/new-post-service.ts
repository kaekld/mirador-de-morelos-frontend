import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewPostService {

  private http = inject(HttpClient)

  sendNewPost(formData: FormData): void {
    const url = `${ environment.apiUrl }/publicacion/nueva`
    this.http.post(url, formData).subscribe({
      next: (resp) => console.log(resp),
      error: (err) => console.log(err)
    })
  }

}
