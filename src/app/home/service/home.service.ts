import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Usuarios} from '../../usuarios/Objetos/Usuarios';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly API = `${environment.API}usuarios/aniversariantes`;
  constructor(private $http: HttpClient) { }
  aniversariantesMes(){
    return this.$http.get<Usuarios>(`${this.API}`);
  }
}
