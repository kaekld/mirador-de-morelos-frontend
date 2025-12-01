import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterPayLoad } from '../interfaces/register-interface';
import { environment } from '../../environments/environment';
import { RegisterResponse } from '../interfaces/register-response';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  private http = inject(HttpClient)

  registerUser(registerData: RegisterPayLoad){
    const url = `${ environment.apiUrl }/usuario/create`

    this.http.post<RegisterResponse>(url, registerData).subscribe({
      next: (resp) => {
        console.log(resp)
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

}
