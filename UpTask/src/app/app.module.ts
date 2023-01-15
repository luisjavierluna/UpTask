import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './seguridad/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './seguridad/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
