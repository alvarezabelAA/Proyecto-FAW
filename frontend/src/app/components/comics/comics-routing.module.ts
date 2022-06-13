import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { ComicsComponent } from './comics.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  {path: '', component:ComicsComponent},
  {path:'agregar', component:AgregarComponent},
  {path:'modificar/:comic', component:ModificarComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
