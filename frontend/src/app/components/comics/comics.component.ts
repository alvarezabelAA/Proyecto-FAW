import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Comics } from 'src/app/models/ComicsResponse';
import { BackendService } from 'src/app/services/backend.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  listaComics: Array<Comics> = [];
  dataSource = new MatTableDataSource(new Array<Comics>());
  displayedColumns =['comic','year', 'sinopsis', 'editorial', 'editar', 'eliminar' ]

  constructor(private backend: BackendService, private router: Router, private share: ShareService) { }

  ngOnInit(): void {
    
    this.backend.getComics().subscribe( x => {
      this.dataSource.data =x.data;
    })
  
    this.share.currentLogin.subscribe(x => {
      if(x == ""){
        this.router.navigateByUrl("/login");
      }
    })

}
logout(){
  localStorage.setItem("token","");
  this.share.changeLogin("");
  this.router.navigateByUrl("/login");
}

eliminar(comic:string){
  this.backend.deleteComic(comic).subscribe(x =>{
    console.log("Respuesta:" + x);
    alert(x.mensaje);
    this.backend.getComics().subscribe( x => {
      this.dataSource.data =x.data;
    })
   });
   
}

modificar(comic:string){
  this.router.navigate(['/comics/modificar/'+comic]);
}
}
