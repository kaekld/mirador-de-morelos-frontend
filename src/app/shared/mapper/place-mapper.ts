import { Dia, Horario, MMResponse, Municipio, Tipo } from "../interfaces/mm-interfaces";
import { Place } from "../interfaces/place-interface";

export class PlaceMapper {

  static mapPlaceItemToPlace(item: MMResponse): Place {
    return {
      id: null,
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

      publicaciones: item.publicaciones
    }
  }

  static mapPlaceItemsToArray(items: MMResponse[]): Place[] {
    return items.map(this.mapPlaceItemToPlace);
  }


}
