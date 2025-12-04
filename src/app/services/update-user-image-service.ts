import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserImageService {

  private http = inject(HttpClient)

  uploadImage(imageData: FormData, userId: number): void {
    const url = `${ environment.apiUrl }/usuario/upload/image/${ userId }`
    this.http.post(url, imageData).subscribe({
      next: (resp) => console.log(resp),
      error: (err) => console.log(err)
    })
  }
  
}
