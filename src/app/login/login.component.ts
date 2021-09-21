import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'login',
  //template: ` <h2>Componente del Login</h2> `,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public titulo: string;

  public usuario: any;
  public usuarioId: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    ) {
    this.titulo = 'Iniciar Sesión';

    this.usuario = {
      registroAcademico: '',
      clave: '',
    };
    console.log('Se ha cargado el componente: login.component.ts');
  }

  ngOnInit(): void {
    console.log('onInit llamado');
    /*this._route.params.subscribe((params: Params) => {
      this.
    })*/
  }

  ngDoCheck() {
    console.log('DoCheck ejecutado');
  }

  ngOnDestroy() {
    console.log('OnDestroy ejecutado');
  }

  comprobarUsuario() {
    if (true) {
      this._router.navigate(['/usuario/1']);
    } else {
      this._router.navigate(['/home']);
    }
  }
}
