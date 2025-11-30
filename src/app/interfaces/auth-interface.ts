export interface LoginPayload {
  email: string,
  password: string
}

export interface LoginReponse {
  mensaje: string;
  usuario: Usuario;
}

export interface Usuario {
  id:           number;
  email:        string;
  rol:          string;
  nombre:       string;
  apellidoP:    string;
  apellidoM:    string;
  imagenPerfil: string | null;
}
