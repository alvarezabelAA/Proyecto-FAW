import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareReplayConfig } from 'rxjs';
import { Comics } from 'src/app/models/ComicsResponse';
import { BackendService } from 'src/app/services/backend.service';
import { ShareService } from 'src/app/services/share.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  listaComics: Array<Comics> = [];
  constructor(private backend: BackendService, private router: Router, private share: ShareService) { }

  ngOnInit(): void {
    
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
  }

  


