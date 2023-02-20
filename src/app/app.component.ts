import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'hackathon-angular';
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        url: '/home'
      },
      {
        label: 'Usuarios',
        items: [
          {
            label: 'Listar',
            icon: 'pi pi-list',
            url: '/usuarios'
          },
          {
            label: 'Cadastrar',
            icon: 'pi pi-plus',
            routerLink: '/usuarios/cadastrar'
          }
        ]
      }
    ];
  }
}
