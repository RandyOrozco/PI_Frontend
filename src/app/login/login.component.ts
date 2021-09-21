import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'login',
  //template: ` <h2>Componente del Login</h2> `,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public titulo: string;
  public bienvenida: string;
  public txt_usuarioRegistrar: string; 
  public txt_usuarioModificar: string; 
  constructor() {
    this.titulo =
      'Si cuenta con las credenciales de acceso puede ingresar al sistema';
    this.bienvenida =
      'Bienvenido a este espacio de información sobre catedráticos y cursos';
    this.txt_usuarioRegistrar = 'Registrar Usuario';
    this.txt_usuarioModificar = 'Modificar Usuario';
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

  registrarUsuario() {
    this.titulo = this.txt_usuarioRegistrar;
  }

  modificarUsuario() {
    this.titulo = this.txt_usuarioModificar;
  }
}
