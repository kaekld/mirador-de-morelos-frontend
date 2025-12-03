export interface PlacePost {
    nombre:            string;
    telefono:          string;
    idUsuario:         number;
    descripcion:       string;
    imagen:            string;
    ubicacionUrlGmaps: string;
    idMunicipio:       number;
    horarios:          Horario[];
    urls:              URL[];
    categorias:        string[];
}

export interface Horario {
    dia:          string;
    horaApertura: string;
    horaCierre:   string;
}

export interface URL {
    url:  string;
    tipo: string;
}
