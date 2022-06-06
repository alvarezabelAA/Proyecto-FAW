import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Comics } from 'src/app/models/ComicsResponse';
import { BackendService } from 'src/app/services/backend.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  formGroup:FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder,private share:ShareService,private router:Router, private backend:BackendService) {
    this.formGroup=this.fb.group({
      comic:'',
      year:'',
      sinopsis:'',
      editorial:'',

    })
   }

  ngOnInit(): void {
  }

  clear(){
    this.formGroup.patchValue({
      comic:'',
      year:'',
      sinopsis:'',
      editorial:'',
    })
  }

  guardar(){
    let registroComic = new Comics(
      this.formGroup.controls['comic'].value,
      this.formGroup.controls['year'].value,
      this.formGroup.controls['sinopsis'].value,
      this.formGroup.controls['editorial'].value,
    );
    this.backend.insertarComic(registroComic).subscribe(x =>{
      console.log("Respuesta:" + x);
      alert(x.mensaje);
     });
     this.clear();
  }

}
