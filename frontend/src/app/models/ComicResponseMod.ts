export class ComicsResponseMod{
    status: number;
    mensaje: string;
    data: Array<Comics2>;


    constructor(status:number, mensaje: string, data: Array<Comics2>){
        this.status=status;
        this.mensaje=mensaje;
        this.data = data;
    }
}

export class  Comics2{
    comic: string;
    year: string;
    sinopsis: string;
    editorial: string;

    constructor(comic: string, year: string, sinopsis:string , editorial:string){
        this.comic= comic;
        this.year = year;
        this.sinopsis=sinopsis;
        this.editorial=editorial;
    }
}