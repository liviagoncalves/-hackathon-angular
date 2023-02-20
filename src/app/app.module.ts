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
import {FormsModule} from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {ToolbarModule} from "primeng/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent,
    CadastrarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    SharedModule,
    ToolbarModule,
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
