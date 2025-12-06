export interface PlacePost {
    nombre:            string;
    telefono:          string;
    idUsuario:         number;
    descripcion:       string;
    imagen:            string | null;
    ubicacionUrlGmaps: string;
    idMunicipio:       number;
    horarios:          Horario[];
    urls:              URLs[];
    categorias:        string[];
}

export interface Horario {
    dia:          string;
    horaApertura: string;
    horaCierre:   string;
}

export interface URLs {
    url:  string;
    tipo: string;
}
