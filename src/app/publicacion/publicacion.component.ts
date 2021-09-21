import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css'],
})
export class PublicacionComponent implements OnInit {

  private publicacion: number;
  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.publicacion = 0;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      // console.log(params);
      //console.log("publicacion = " + params.publicacion);
      //console.log("tipo parametro publicacion = " + typeof(+params.publicacion));
      if(params.publicacion){
        this.publicacion = +params.publicacion;
        console.log("ir a la publicacion " + this.publicacion);
        // TODO: mostrar una publicacion con sus comentarios
        
      } else {
        console.log("todas las publicaciones");
        // TODO: listar todas las publicaciones
        // TODO: cuando se le de click a una publicacion mostrar su detalle con sus comentarios
        
        //this.redirigir(0);
      }
      
    })
  }

  redirigir(ePub: number){
    this._router.navigate(['/publicacion/' + ePub]);
  }
}
