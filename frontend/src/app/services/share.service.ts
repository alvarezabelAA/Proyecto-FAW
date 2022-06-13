import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private loginSource = new BehaviorSubject<String>("")
  currentLogin = this.loginSource.asObservable();
  constructor(private http: HttpClient) { }

  changeLogin(usuarios: string){
    this.loginSource.next(usuarios);
  }

  
}
