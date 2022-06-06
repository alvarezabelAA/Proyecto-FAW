import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  constructor(private backend:BackendService, private fb:FormBuilder) { }

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
      console.log(x)
    })
  }
}
