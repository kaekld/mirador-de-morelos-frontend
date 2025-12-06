export interface NewResponse {
  id:              number;
  titulo:          string;
  contenido:       string;
  fechaCreacion:   Date;
  imagenDestacada: string;
  creditoAutor:    string;
  usuario:         Usuario | null;
  municipio:       Municipio;
  categorias:      Municipio[];
}

export interface Municipio {
  id:     number;
  nombre: string;
}

export interface Usuario {
  id:           number;
  email:        string;
  rol:          string;
  nombre:       string;
  apellidoP:    string;
  apellidoM:    string;
  imagenPerfil: string;
}
