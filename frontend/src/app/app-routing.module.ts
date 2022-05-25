import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics/comics.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"comics", component:ComicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
