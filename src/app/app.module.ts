import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrarEspecialidadComponent } from './registrar-especialidad/registrar-especialidad.component';
import { ListaEspecialidadesComponent } from './lista-especialidades/lista-especialidades.component';
import { ListaEspecialistaComponent } from './lista-especialista/lista-especialista.component';
import { RegistroEspecialistaComponent } from './registro-especialista/registro-especialista.component';
import { ActualizarEspecialistaComponent } from './actualizar-especialista/actualizar-especialista.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarEspecialidadComponent,
    ListaEspecialidadesComponent,
    ListaEspecialistaComponent,
    RegistroEspecialistaComponent,
    ActualizarEspecialistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
