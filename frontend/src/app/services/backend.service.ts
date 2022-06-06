import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';

const BE_API = environment.backend_url;
const header = {headers: new HttpHeaders().set('Content-Type','aplication/json')}

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private http:  HttpClient) { }


  login(data: LoginRequest){
    return this.http.post<LoginResponse>(BE_API + "/login", data, header);
  }
  getContactos(token: String){
    return this.http.get(BE_API + "/comics?token=" +token,header);
  }
}
