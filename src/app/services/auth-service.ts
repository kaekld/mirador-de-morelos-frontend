import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginPayload, LoginReponse, Usuario } from '../interfaces/auth-interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient)

  userData = signal<Usuario | null>(null);
  loginMessage = signal<string>('');
  loginSuccessful = signal<boolean>(false);
  password = signal<string>('');

  loginUser(credentials: LoginPayload){
    const url = `${ environment.apiUrl }/usuario/auth`

    return this.http.post<LoginReponse>(url, credentials)
  }
}
