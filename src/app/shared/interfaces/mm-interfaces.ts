export interface MMResponse {
  id:                number;
  nombre:            string;
  telefono:          string;
  usuario:           Usuario;
  descripcion:       Descripcion;
  imagen:            Imagen;
  ubicacionUrlGmaps: string;
  interacciones:     null;
  municipio:         Municipio;
  horarios:          Horario[];
  urls:              Enlace[];
  publicaciones:     Publicaciones[];
  categorias:        Municipio[];
}

export interface Municipio {
  id:     number;
  nombre: MunicipioNombre;
}

export enum MunicipioNombre {
  Axochiapan = "Axochiapan",
  Ayala = "Ayala",
  Bar = "bar",
  Comida = "comida",
  Cultural = "cultural",
  Social = "social",
}

export enum Descripcion {
  CafeteríaArtesanalConPanadería = "Cafetería artesanal con panadería.",
  EncuentraLaMedicinaMasBarataDelMercado = "encuentra la medicina mas barata del mercado",
  PizzeriaDondeEncuentrasLasMejoresPizzas = "pizzeria, donde encuentras las mejores pizzas.",
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

export enum Imagen {
  CafeJpg = "cafe.jpg",
}

export interface Publicaciones {
  id:            number;
  titulo:        string;
  contenido:     string;
  fechaCreacion: Date;
  imagen:        string;
}

export interface Enlace {
  url:  string;
  tipo: Tipo;
}

export enum Tipo {
  Facebook = "facebook",
  Instagram = "instagram",
  SitioWeb = "sitio_web",
}

export interface Usuario {
  id:           number;
  email:        Email;
  rol:          Rol;
  nombre:       UsuarioNombre;
  apellidoP:    ApellidoP;
  apellidoM:    ApellidoM;
  imagenPerfil: ImagenPerfil;
}

export enum ApellidoM {
  Gómez = "Gómez",
}

export enum ApellidoP {
  Lopez = "lopez",
  Pérez = "Pérez",
}

export enum Email {
  GaelExampleCOM = "gael@example.com",
  UsuarioExampleCOM = "usuario@example.com",
}

export enum ImagenPerfil {
  B3C3153CEa5147E2BbabAf25C6D1E988PruebaJpg = "b3c3153c-ea51-47e2-bbab-af25c6d1e988_prueba.jpg",
  Xd = "xd",
}

export enum UsuarioNombre {
  Gael = "gael",
  Juan = "Juan",
}

export enum Rol {
  Administrador = "administrador",
  Comun = "comun",
}


