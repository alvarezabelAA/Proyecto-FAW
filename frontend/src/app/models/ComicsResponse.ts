export class ComicsResponse {
    status: number;
    mensaje: string;
    data: Array<Comics>;

    constructor(status: number, mensaje:string, data: Array<Comics>){
        this.status=status;
        this.mensaje= mensaje;
        this.data=data;
    }
}
export class  Comics{
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