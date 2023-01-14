import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './seguridad/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './seguridad/registrarse/registrarse.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  
  {path: 'iniciar-sesion', title: 'Iniciar Sesión', component: IniciarSesionComponent},
  {path: 'registrarse', title: 'Crear Cuenta', component: RegistrarseComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
