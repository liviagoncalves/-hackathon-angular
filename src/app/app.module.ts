import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {HttpClientModule} from '@angular/common/http';
import {UsuariosService} from './usuarios/service/usuarios.service';
import { CadastrarUsuariosComponent } from './usuarios/cadastrar-usuarios/cadastrar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent,
    CadastrarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
