import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { RegistrarEspecialistaComponent } from './registrar-especialista/registrar-especialista.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';

const routes: Routes = [
  { path: '', redirectTo: 'registrar-paciente', pathMatch: 'full' },
  { path: 'registrar-paciente', component: RegistrarPacienteComponent },
  { path: 'registrar-especialista', component: RegistrarEspecialistaComponent },
  { path: 'registrar-cita', component: RegistrarCitaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
