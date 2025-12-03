import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeletePostService {

  private http = inject(HttpClient)

  deletePost(postId: number): void {
    const url = `${ environment.apiUrl }/publicacion/delete/${ postId }`
    this.http.delete(url).subscribe({
      next: (resp) => console.log(resp),
      error: (err) => console.log(err)
    })
  }

}
