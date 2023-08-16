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
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MegaMenuModule } from 'primeng/megamenu';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './home/home.component';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';
import { RegistrarCitasComponent } from './registrar-citas/registrar-citas.component';
import { DashboardpacienteComponent } from './dashboardpaciente/dashboardpaciente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardcitaComponent } from './dashboardcita/dashboardcita.component';
import { ListarCitasPacientesComponent } from './listar-citas-pacientes/listar-citas-pacientes.component';
import { ListarCitasTodasComponent } from './listar-citas-todas/listar-citas-todas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrarEspecialidadComponent,
    ListaEspecialidadesComponent,
    ListaEspecialistaComponent,
    RegistroEspecialistaComponent,
    ActualizarEspecialistaComponent,
    RegistrarPacienteComponent,
    ListaPacientesComponent,
    ActualizarPacienteComponent,
    LoginComponent,
    ListaPacientesComponent,
    ActualizarPacienteComponent,
    HomeComponent,
    AgendamientoComponent,
    AppComponent,
    RegistrarCitaComponent,
    DashboardComponent,
    DashboardpacienteComponent,
    RegistrarCitasComponent,
    DashboardcitaComponent,
    ListarCitasPacientesComponent,
    ListarCitasTodasComponent
    
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
    FullCalendarModule,
    //MegaMenuModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
