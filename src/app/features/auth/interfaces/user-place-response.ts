export interface UserPlace {
  id:                number;
  nombre:            string;
  telefono:          string;
  descripcion:       string;
  imagen:            string;
  ubicacionUrlGmaps: string;
  Municipio:         Municipio;
  horarios:          Horario[];
  urls:              URL[];
  categorias:        Municipio[];
}

export interface Municipio {
  id:     number;
  nombre: Nombre;
}

export enum Nombre {
  Axochiapan = "Axochiapan",
  Ayala = "Ayala",
  Comida = "comida",
  Cultural = "cultural",
  Social = "social",
}

export interface Horario {
  horaApertura: string;
  horaCierre:   string;
  dia:          Dia;
}

export enum Dia {
  Domingo = "Domingo",
  Jueves = "Jueves",
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miercoles",
  Sabado = "Sabado",
  Viernes = "Viernes",
}

export interface URL {
  url:  string;
  tipo: Tipo;
}

export enum Tipo {
  Facebook = "facebook",
  Instagram = "instagram",
  SitioWeb = "sitio_web",
}
