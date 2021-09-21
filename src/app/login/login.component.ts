import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'login',
  //template: ` <h2>Componente del Login</h2> `,
  templateUrl: './login.component.html',
})
export class LoginComponent {

  public titulo: string;

	public usuario: any;
	public usuarioId: any;


  constructor() {
this.titulo = "Iniciar Sesión"

    this.usuario = {
        "registroAcademico": "",
        "clave": ""
    };
    console.log('Se ha cargado el componente: login.component.ts');
  }

  ngOnInit(): void {
    console.log('onInit llamado');
  }

  ngDoCheck() {
    console.log('DoCheck ejecutado');
  }

  ngOnDestroy(){
    console.log('OnDestroy ejecutado');
    
  }
}
