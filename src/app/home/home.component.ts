import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo: string;
  public bienvenida: string;

  constructor(){
    this.titulo =
      'Si cuenta con las credenciales de acceso puede ingresar al sistema';
    this.bienvenida =
      'Bienvenido a este espacio informativo sobre catedráticos y cursos';}

  ngOnInit(): void {
  }

}
