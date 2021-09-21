//Este será un servicio que hará peticiones ajax a otro servidor
//esto es para poder inyectar nuestro servicio a otras clases
import { Injectable } from '@angular/core';
//esto es para permitir hacer peticiones ajax a un servicio externo, una url externa y modificar cabeceras de las peticiones
import { HttpClient, HttpHeaders } from '@angular/common/http';
//esto es para recoger la información que nos devuelva el api REST cuando hagamos una petición
//Sólo funcionó al ejecutar los siguientes comandos
//npm install -g rxjs //no usar esta
//npm install rxjs-compat --save //esta es la funcional
import { Observable } from 'rxjs/Observable';

//para las pruebas de consumo de servicios externos se utilziará el servicio
//https://reqres.in/ que es una api para hacer pruebas
@Injectable()
export class PeticionServicio{

	public url: string;

	constructor(
		//la inyeción del servicio HTTP es para  utilizar el servicio http para hacer peticiones ajax de forma que se pueda trabajar de forma asincrona hacia otro servidor o backend que pueda estar en la nube
		public _http: HttpClient
	){
		this.url = "https://reqres.in";
	}

	//se llamarán a estos metodos en el componente para obtener los datos
	//Devuelve un objeto Observable que siempre tendrá el método suscribe
	getRESTUser(eUsuarioId: string): Observable<any>{
		return this._http.get(this.url + "/api/users/" + eUsuarioId);
	}

//metodo encargado de enviar el nuevo usuario al servicio
	addUsuario(eUsuario: any): Observable<any>{
		let jsonString = JSON.stringify(eUsuario);
		let cabecera = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+"/api/users", jsonString, {headers: cabecera});
	}

}