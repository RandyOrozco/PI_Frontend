import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registroUsuario/registrousuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CatedraticoComponent } from './catedratico/catedratico.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { CursoComponent } from './curso/curso.component';
import { CursousuarioComponent } from './cursousuario/cursousuario.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    //aqui van las pipes, directivas y componentes
    AppComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    UsuarioComponent,
    CatedraticoComponent,
    ComentarioComponent,
    CursoComponent,
    CursousuarioComponent,
    PublicacionComponent,
    TopbarComponent,
    BottombarComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
