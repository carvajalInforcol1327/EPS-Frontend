import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { RegistrarEspecialistaComponent } from './registrar-especialista/registrar-especialista.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardpacienteComponent } from './dashboardpaciente/dashboardpaciente.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { ListarCitasPacientesComponent } from './listar-citas-pacientes/listar-citas-pacientes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardcitaComponent } from './dashboardcita/dashboardcita.component';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';
import { ListarCitasTodasComponent } from './listar-citas-todas/listar-citas-todas.component';
import { RegistrarCitasComponent } from './registrar-citas/registrar-citas.component';

const routes: Routes = [
  {path : 'registrar-citas',component : RegistrarCitasComponent},
  {path : 'listar-citas-todas',component : ListarCitasTodasComponent},
  {path : 'envio-nombre-navbar/:nombre',component : NavbarComponent},
  {path : 'agendamiento',component : AgendamientoComponent},
  {path : 'lista-citas-paciente/:cedula',component : ListarCitasPacientesComponent},
  {path : 'actualizar-paciente/:cedula',component : ActualizarPacienteComponent},
  { path: 'listapacientes', component: ListaPacientesComponent, pathMatch:'full' },
  { path: 'dashboardpaciente', component: DashboardpacienteComponent, pathMatch:'full' },
  { path: 'dashboardcitas', component: DashboardcitaComponent, pathMatch:'full' },
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch:'full' },
  { path: 'login', component: LoginComponent, pathMatch:'full' },
  { path: 'registrar-paciente', component: RegistrarPacienteComponent },
  { path: 'registrar-especialista', component: RegistrarEspecialistaComponent },
  { path: 'registrar-cita', component: RegistrarCitaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
