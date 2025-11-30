import { Municipio } from "./new-response";

export interface New {
  titulo:         string;
  contenido:      string;
  imagen:         string;
  municipio:      string;
  categorias:     string[]
  fecha:          Date;
}
