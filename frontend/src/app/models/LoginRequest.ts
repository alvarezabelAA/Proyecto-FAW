export class LoginRequest {
    usuarios: String;
    pass: String;

    constructor(usuarios:String, pass: String){
        this.usuarios = usuarios;
        this.pass = pass;
    }
}