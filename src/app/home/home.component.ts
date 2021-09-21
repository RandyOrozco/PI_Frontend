import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo: string;
  public bienvenida: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo =
      'Si cuenta con las credenciales de acceso puede ingresar al sistema';
    this.bienvenida =
      'Bienvenido a este espacio informativo sobre catedráticos y cursos';}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      // console.log(params);
      console.log("salir = " + params.salir);
      console.log("tipo parametro salir = " + typeof(+params.salir));
      
    })



  }

}
