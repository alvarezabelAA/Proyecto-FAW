import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { BackendService } from 'src/app/services/backend.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  constructor(private backend:BackendService, private fb:FormBuilder, private share: ShareService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      usuarios:'',
      pass:''
    })
  }

  login(){
    let usuarios = new LoginRequest(this.formGroup.controls["usuarios"].value, this.formGroup.controls["pass"].value)
    console.log(usuarios);
    this.backend.login(usuarios).subscribe(x => {
      console.log("Respuesta:" + x);
      alert(x.mensaje);
      if (typeof(Storage) !== 'undefined') {
        // Código cuando Storage es compatible
        localStorage.setItem("token", x.key)
        this.share.changeLogin(this.formGroup.controls["usuarios"].value);
        this.router.navigateByUrl("/comics")
      } else {
       alert("Su browser no soporta LocalStorage");
      }
      
    })
  }

  registro(){
    this.router.navigateByUrl("/registro")
  }
}
