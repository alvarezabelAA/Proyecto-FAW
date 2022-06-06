import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComicsResponseDel } from '../models/ComicResponseDel';
import { Comics, ComicsResponse } from '../models/ComicsResponse';
import { Registro, RegistroResponse } from '../models/InicioResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Comics2, ComicsResponseMod } from '../models/ComicResponseMod';
 
const BE_API = environment.backend_url;
const header = {headers: new HttpHeaders().set('Content-Type','application/json')}

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private http:  HttpClient) { }


  login(data: LoginRequest){
    return this.http.post<LoginResponse>(BE_API + "/login", data, header);
  }

  insertarUsuario(registro:Registro){
    console.log(BE_API + '/registro');
    console.log(Registro);
    return this.http.post<RegistroResponse>(BE_API + '/registro', registro,header);
  }

  insertarComic(registroComics:Comics){
    console.log(BE_API + '/comics');
    console.log(registroComics);
    return this.http.post<ComicsResponse>(BE_API + '/comics', registroComics,header);

  }

  deleteComic(id:string){
    return this.http.delete<ComicsResponseDel>(BE_API + '/comics/'+id);
    
  }
  
  modificarComic(comic:string, modificarComics: Comics2){
    return this.http.put<ComicsResponseDel>(BE_API + '/comics/'+comic, modificarComics);

  }

  
  getComics(){
    return this.http.get<ComicsResponse>(BE_API + "/comics", header);
  }

  getUnComic(comic:string){
    return this.http.get<ComicsResponse>(BE_API + "/comics/" + comic);
  }
}
