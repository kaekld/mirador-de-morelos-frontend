import { Place } from "../interfaces/place-interface";
import { Dia, Horario, Municipio, Tipo, UserPlace } from "../interfaces/user-place-response";

export class UserPlaceMapper {

  static mapPlaceItemToPlace(item: UserPlace): Place {
    return {
      id: item.id,
      nombre: item.nombre,
      telefono: item.telefono,
      descripcion: item.descripcion,
      imagen: item.imagen,
      ubicacion: item.ubicacionUrlGmaps,

      horarios: item.horarios.map((horario: Horario) => ({
        horaApertura: horario.horaApertura.toString(),
        horaCierre: horario.horaCierre.toString(),
        dia: horario.dia as Dia
      })),

      urls: item.urls.map((url) => ({
        url: url.url.toString(),
        tipo: url.tipo as Tipo
      })),

      categories: item.categorias.map((categoria: Municipio) => categoria.nombre.toString()),

      publicaciones: null
    }
  }

  static mapPlaceItemsToArray(items: UserPlace[]): Place[] {
    return items.map(this.mapPlaceItemToPlace);
  }


}
