import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Usuarios} from '../Objetos/Usuarios';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent implements OnInit {

  usuario: Usuarios = new Usuarios();
  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit(): void {
  }
  adicionarUsuario = () => {
    this.usuariosService.adicionarUsuario(this.usuario).subscribe(
      sucess => this.navegar('usuarios'),
      error => console.log('Não foi possivel cadastrar usuário'),
      () => console.log('Requisição completo')
    );
  }
  navegar = (rota: any) => {
    this.router.navigate([rota]);
  }

}
