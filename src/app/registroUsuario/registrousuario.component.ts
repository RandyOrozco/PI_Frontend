import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'registroUsuario',
  templateUrl: './registroUsuario.component.html',
  styleUrls: ['./registroUsuario.component.css'],
})
export class RegistroUsuarioComponent implements OnInit, DoCheck, OnDestroy {
  public titulo = 'titulo original';
  public txt_usuarioRegistrar = 'Registrar Usuario';
  public txt_usuarioModificar = 'Modificar Usuario';

  constructor() {
    console.log('constructor llamado');
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
