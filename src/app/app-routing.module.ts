import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarEspecialidadComponent } from './registrar-especialidad/registrar-especialidad.component';
import { ListaEspecialidadesComponent } from './lista-especialidades/lista-especialidades.component';
import { ListaEspecialistaComponent } from './lista-especialista/lista-especialista.component';
import { RegistroEspecialistaComponent } from './registro-especialista/registro-especialista.component';
import { ActualizarEspecialistaComponent } from './actualizar-especialista/actualizar-especialista.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarCitasComponent } from './registrar-citas/registrar-citas.component';
import { DashboardpacienteComponent } from './dashboardpaciente/dashboardpaciente.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';
import { ListarCitasTodasComponent } from './listar-citas-todas/listar-citas-todas.component';
import { DashboardcitaComponent } from './dashboardcita/dashboardcita.component';
import { EstadoCitaComponent } from './estado-cita/estado-cita.component';
import { ActualizarEspecialidadComponent } from './actualizar-especialidad/actualizar-especialidad.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'registrar-especialidad', component: RegistrarEspecialidadComponent },
  { path: 'lista-especialidades', component: ListaEspecialidadesComponent },
  { path: 'registro-especialista', component: RegistroEspecialistaComponent },
  { path: 'lista-especialista', component: ListaEspecialistaComponent }, 
  { path: 'registrar-citas',component : RegistrarCitasComponent},
  { path: 'registrar-paciente', component: RegistrarPacienteComponent },
  { path: 'actualizarEspecialista/:cedula', component: ActualizarEspecialistaComponent },
  { path: 'listapacientes', component: ListaPacientesComponent},
  { path: 'actualizar-paciente/:cedula',component : ActualizarPacienteComponent},
  { path: 'envio-nombre-navbar/:nombre',component : NavbarComponent},
  { path: 'dashboard', component: DashboardComponent, pathMatch:'full' }, 
  { path:'dashboardpaciente', component:DashboardpacienteComponent,pathMatch:'full' },   
  { path: 'agendamiento',component : AgendamientoComponent},
  { path: 'login', component: LoginComponent, pathMatch:'full' },
  { path: 'registrar-cita', component: RegistrarCitaComponent },
  { path: 'listar-citas-todas',component : ListarCitasTodasComponent},
  { path: 'dashboardcita', component: DashboardcitaComponent, pathMatch:'full' },
  { path: 'estado-cita/:id',component: EstadoCitaComponent,pathMatch:'full'},
  { path: 'actualizarEspecialidad/:especialidad_id', component: ActualizarEspecialidadComponent,pathMatch:'full'},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
