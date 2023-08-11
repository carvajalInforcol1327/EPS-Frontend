import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarEspecialidadComponent } from './registrar-especialidad/registrar-especialidad.component';
import { ListaEspecialidadesComponent } from './lista-especialidades/lista-especialidades.component';
import { ListaEspecialistaComponent } from './lista-especialista/lista-especialista.component';
import { RegistroEspecialistaComponent } from './registro-especialista/registro-especialista.component';
import { ActualizarEspecialistaComponent } from './actualizar-especialista/actualizar-especialista.component';

const routes: Routes = [
  { path: '', redirectTo: 'registrar-paciente', pathMatch: 'full' },
  { path: 'registrar-especialidad', component: RegistrarEspecialidadComponent },
  { path: 'lista-especialidades', component: ListaEspecialidadesComponent },
  { path: 'lista-especialista', component: ListaEspecialistaComponent},
  { path: 'registro-especialista',component:RegistroEspecialistaComponent },
  {path:'ActualizarEspecialista/:cedula', component:ActualizarEspecialistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
