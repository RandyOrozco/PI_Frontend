import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicacionComponent } from './publicacion/publicacion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:salir', component: HomeComponent },
  { path: 'publicacion', component: PublicacionComponent, },
  { path: 'publicacion/:publicacion', component: PublicacionComponent, },
  { path: 'usuario', component: UsuarioComponent, },
  { path: 'usuario/:usuario', component: UsuarioComponent, },
  { path: '**', component: HomeComponent, },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
