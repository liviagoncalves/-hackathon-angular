import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {CadastrarUsuariosComponent} from './usuarios/cadastrar-usuarios/cadastrar-usuarios.component';

const routes: Routes = [
  // { path: '', component: AppComponent }
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/cadastrar', component: CadastrarUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
