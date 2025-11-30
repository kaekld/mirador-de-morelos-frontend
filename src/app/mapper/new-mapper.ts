import { New } from "../interfaces/new-interface";
import { Municipio, NewResponse, Usuario } from "../interfaces/new-response";

export class NewMapper {

  static mapNewItemToNew(item: NewResponse): New{
    return{
      id: item.id,
      titulo: item.titulo,
      autor: item.creditoAutor,
      contenido: item.contenido,
      imagen: item.imagenDestacada,
      municipio: item.municipio.nombre,
      categorias: item.categorias.map( (categoria: Municipio) => categoria.nombre.toString()),
      fecha: item.fechaCreacion
    }
  }

  static mapNewsItemsToArray(items: NewResponse[]): New[]{
    return items.map(this.mapNewItemToNew)
  }

}
