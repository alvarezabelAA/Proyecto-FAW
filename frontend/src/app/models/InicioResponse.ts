export class RegistroResponse {
    status: number;
    mensaje: string;
    data: Array<Registro>;

    constructor(status: number, mensaje:string, data: Array<Registro>){
        this.status=status;
        this.mensaje= mensaje;
        this.data=data;
    }
}

export class Registro{
    nombre: string;
    usuarios:string;
    pass:string;
    fecha:Date;
    sexo:string;

    constructor(nombre:string,usuarios:string,pass:string,fecha:Date,sexo:string){
        this.nombre=nombre;
        this.usuarios=usuarios;
        this.pass= pass;
        this.fecha=fecha;
        this.sexo=sexo;
    }
}