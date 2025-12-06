export interface NewPlaceResponse {
  id:                number;
  nombre:            string;
  telefono:          string;
  usuario:           Usuario;
  descripcion:       string;
  imagen:            string;
  ubicacionUrlGmaps: string;
  interacciones:     null;
  municipio:         Municipio;
  horarios:          Horario[];
  urls:              URL[];
  publicaciones:     null;
  categorias:        Municipio[];
}

export interface Municipio {
  id:     number;
  nombre: string;
}

export interface Horario {
  id:           number;
  horaApertura: string;
  horaCierre:   string;
  dia:          string;
}

export interface URL {
  id:   number;
  url:  string;
  tipo: string;
}

export interface Usuario {
  id:           number;
  email:        string;
  password:     string;
  rol:          string;
  nombre:       string;
  apellidoP:    string;
  apellidoM:    string;
  imagenPerfil: string;
}
