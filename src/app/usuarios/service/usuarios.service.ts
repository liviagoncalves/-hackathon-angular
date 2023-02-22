import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../Objetos/Usuarios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private readonly API = `${environment.API}usuarios`;
  constructor(
    private $http: HttpClient
  ) { }

  listar(){
    // return ['Larissa', 'Paulo', 'Solange', 'Barbara'] - teste se a service ta conectando
    return this.$http.get<Usuarios[]>(`${this.API}`);
  }
  deleteUser(id: any){
    return this.$http.delete(`${this.API}/${id}`);
  }

  adicionarUsuario(usuarios: Usuarios){
    return this.$http.post(this.API, usuarios);
  }

  editarUsuario(usuarios: Usuarios){
    return this.$http.put(this.API, usuarios);
  }
  buscarUsuarioId( id: any){
    return this.$http.get<Usuarios>(`${this.API}/${id}`);
  }

}
