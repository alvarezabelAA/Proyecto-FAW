import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comics2, ComicsResponseMod } from 'src/app/models/ComicResponseMod';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  comic_recibido='';
  formGroup:FormGroup = new FormGroup({});
  dataSource = new MatTableDataSource(new Array<Comics2>());
  displayedColumns =['comic','year', 'sinopsis', 'editorial']
  constructor(private fb: FormBuilder,private backend:BackendService, private router:Router, private activateRoute:ActivatedRoute) {
    this.formGroup=this.fb.group({
      comic:'',
      year:'',
      sinopsis:'',
      editorial:'',

    })
   }

  ngOnInit(): void {
    const comic_entrada= <string>this.activateRoute.snapshot.params['comic'];
    console.log('comics: '+ comic_entrada);
    this.comic_recibido=comic_entrada;
    if(comic_entrada){
      this.backend.getUnComic(comic_entrada).subscribe(x =>{
        this.dataSource.data =x.data;
      });
    }

  }

  clear(){
    this.formGroup.patchValue({
      comic:'',
      year:'',
      sinopsis:'',
      editorial:'',
    })
  }


  modificar(){
    let modificarComics2 = new Comics2(
      this.formGroup.controls['comic'].value,
      this.formGroup.controls['year'].value,
      this.formGroup.controls['sinopsis'].value,
      this.formGroup.controls['editorial'].value,
    );
    this.backend.modificarComic(this.formGroup.controls['comic'].value, modificarComics2).subscribe(x =>{
      console.log("Respuesta:" + x);
      alert(x.mensaje);
      this.backend.getUnComic(this.comic_recibido).subscribe(x =>{
        this.dataSource.data =x.data;
      });
     });
     this.clear();
  }

}


