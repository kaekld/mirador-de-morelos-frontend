import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeletePostService {

  private http = inject(HttpClient)

  deletePost(postId: number) {
    const url = `${ environment.apiUrl }/publicacion/delete/${ postId }`
    return this.http.delete(url)
  }

}
