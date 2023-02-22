import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuariosService} from '../service/usuarios.service';
import {Usuarios} from '../Objetos/Usuarios';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  id: any;
  usuario: Usuarios = new Usuarios();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      if (parametros['id']){
        this.id = parametros['id'];
        console.log(`Id enviado: ${this.id}`);

        this.usuarioService.buscarUsuarioId(this.id).subscribe(user => {
          this.usuario = user;
          console.log(user);
        });
      }
    });
  }

  editarUsuario = () => {
    this.usuarioService.editarUsuario(this.usuario).subscribe(
      sucess => this.navegar('usuarios'),
      error => console.log('Não foi possivel Editar usuário'),
      () => console.log('Requisição completo')
    );
  }
  navegar = (rota: any) => {
    this.router.navigate([rota]);
  }
}
