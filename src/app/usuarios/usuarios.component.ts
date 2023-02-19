import { Component, OnInit } from '@angular/core';
import {UsuariosService} from './service/usuarios.service';
import {Usuarios} from './Objetos/Usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<Usuarios> = [];
  carregarLoading = false;
  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    // this.usuarios = this.usuariosService.listar()
    this.usuariosService.listar().subscribe(user => {
      setTimeout(() => {
        this.carregarLoading = true;
        this.usuarios = user;
      }, 100)
    });
  }
  deleteUser = (id: any) => {
    this.usuariosService.deleteUser(id).subscribe(
      sucess => this.ngOnInit(),
      error => console.log('Usuário não foi excluído'),
      () => console.log('Requisição completa')
    );
  }
}
