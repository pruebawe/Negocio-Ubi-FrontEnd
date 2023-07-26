export class Business{
    id?: number;
    nombre: string;
    descripcion: string;
    direccion: string;
    latitud: number;
    longitud: number;
    horaInicio: number;
    horaFin: number;

    constructor(nombre: string, descripcion: string, direccion: string, latitud: number, longitud: number, horaInicio: number, horaFin: number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }
}