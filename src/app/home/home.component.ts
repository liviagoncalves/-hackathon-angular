import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from '../usuarios/service/usuarios.service';
import {Usuarios} from '../usuarios/Objetos/Usuarios';
import {HomeService} from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aniver: Usuarios;
  constructor(
    private homeService: HomeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.homeService.aniversariantesMes().subscribe(result => {
      this.aniver = result;
      console.log(this.aniver = result);
    });
  }

  aniversariantesMes = () => {
    this.homeService.aniversariantesMes().subscribe(result => {
      this.aniver = result;
      console.log(this.aniver = result);
    });
  }
}
