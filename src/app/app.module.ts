import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { RegistrarEspecialistaComponent } from './registrar-especialista/registrar-especialista.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardpacienteComponent } from './dashboardpaciente/dashboardpaciente.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import {MatTableModule} from '@angular/material/table';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { ListarCitasPacientesComponent } from './listar-citas-pacientes/listar-citas-pacientes.component';
import { EliminarPacienteComponent } from './eliminar-paciente/eliminar-paciente.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { DashboardcitaComponent } from './dashboardcita/dashboardcita.component';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListarCitasTodasComponent } from './listar-citas-todas/listar-citas-todas.component';
import { RegistrarCitasComponent } from './registrar-citas/registrar-citas.component';
import { DashboardespecialistaComponent } from './dashboardespecialista/dashboardespecialista.component';
import { RegistrarEspecialidadComponent } from './registrar-especialidad/registrar-especialidad.component';
import { ListaEspecialistasComponent } from './lista-especialistas/lista-especialistas.component';
import { ActualizarEspecialistaComponent } from './actualizar-especialista/actualizar-especialista.component';
import { DashboardespecialidadComponent } from './dashboardespecialidad/dashboardespecialidad.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarPacienteComponent,
    RegistrarEspecialistaComponent,
    RegistrarCitaComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DashboardpacienteComponent,
    ListaPacientesComponent,
    ActualizarPacienteComponent,
    ListarCitasPacientesComponent,
    EliminarPacienteComponent,
    DashboardcitaComponent,
    AgendamientoComponent,
    ListarCitasTodasComponent,
    RegistrarCitasComponent,
    DashboardespecialistaComponent,
    RegistrarEspecialidadComponent,
    ListaEspecialistasComponent,
    ActualizarEspecialistaComponent,
    DashboardespecialidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MegaMenuModule,
    FullCalendarModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
