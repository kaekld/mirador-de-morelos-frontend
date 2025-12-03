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

    this.http.post<LoginReponse>(url, credentials).subscribe({
      next: (resp) => {
        this.password.set(credentials.password)
        this.userData.set(resp.usuario);
        this.loginMessage.set(resp.mensaje);
        this.loginSuccessful.set(resp.mensaje === 'Login correcto')
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
