import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EditUser } from '../interfaces/edit-user-interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EditUserService {

  private http = inject(HttpClient)

  updateUser(updatedData: EditUser): void {
    const url = `${ environment.apiUrl }/usuario/update`
    this.http.patch(url, updatedData).subscribe({
      next: (resp) => console.log(resp),
      error: (err) => console.log(err)
    })
  }
}
