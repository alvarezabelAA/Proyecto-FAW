import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from 'src/app/models/InicioResponse';
import { BackendService } from 'src/app/services/backend.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formGroup:FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder,private share:ShareService,private router:Router, private backend:BackendService) {
    this.formGroup=this.fb.group({
      nombre:'',
      usuarios:'',
      pass:'',
      fecha:'',
      sexo:'',
    })
   }

  ngOnInit(): void {
  }
  clear(){
    this.formGroup.patchValue({
      nombre:'',
      usuarios:'',
      pass:'',
      fecha:'',
      sexo:'',
    })
  }

  guardar(){
    let registro = new Registro(
      this.formGroup.controls['nombre'].value,
      this.formGroup.controls['usuarios'].value,
      this.formGroup.controls['pass'].value,
      this.formGroup.controls['fecha'].value,
      this.formGroup.controls['sexo'].value,
      );
      this.backend.insertarUsuario(registro).subscribe(x =>{
        console.log("Respuesta:" + x);
        alert(x.mensaje);
       });
       this.clear();
  }

}
