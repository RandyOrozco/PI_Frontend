import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  public txt_usuarioRegistrar: string;
  public txt_usuarioModificar: string;
  constructor() {
    this.txt_usuarioRegistrar = 'Registrar Usuario';
    this.txt_usuarioModificar = 'Modificar Usuario';
  }

  ngOnInit(): void {}

  registrarUsuario() {
    this.txt_usuarioRegistrar;
  }

  modificarUsuario() {
    this.txt_usuarioModificar;
  }
}
