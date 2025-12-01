import { Enlace, Horario, Publicaciones } from "./mm-interfaces"

export interface Place {
  id: number | null,
  nombre: string,
  telefono: string,
  descripcion: string,
  imagen: string,
  ubicacion: string,
  horarios: Horario[],
  urls: Enlace[];
  categories: string[],
  publicaciones: Publicaciones[] | null
}
