import { Component, OnInit } from '@angular/core';
import { EspecialistaService } from '../especialista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from '../cita.service';
import { Especialista } from '../especialista';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { Cita } from '../cita';

@Component({
  selector: 'app-registrar-citas',
  templateUrl: './registrar-citas.component.html',
  styleUrls: ['./registrar-citas.component.css']
})
export class RegistrarCitasComponent implements OnInit{


  constructor(private pacienteService:PacienteService, private especialistaService:EspecialistaService,private router:Router,private route:ActivatedRoute,private citaService:CitaService){}

  cita : Cita = new Cita();
  especialistas:Especialista[]
  pacientes:Paciente[];

  ngOnInit(): void {
    this.obtenerEspecialistas();
    this.obtenerPacientes();
  }


  private obtenerEspecialistas(){
    this.especialistaService.listarEspecialista().subscribe(dato =>{
      this.especialistas = dato;
      console.log(this.especialistas);
    })
  }

  private obtenerPacientes(){
    this.pacienteService.obtenerListaDePacientes().subscribe(dato =>{
      this.pacientes = dato;
      console.log(this.pacientes);
    });
    }

    onSubmit(){
      // Asegurar que la cadena de hora esté en el formato adecuado
    this.cita.horaCita = this.formatHour(this.cita.horaCita);
      this.guardarCita();
    }

    private guardarCita(){
      this.citaService.registrarCita(this.cita).subscribe(dato=>{
        this.recarga();
      },error => console.log('Error al registrar la cita:', error?.error?.message))
    }

  recarga(): void {
    window.location.reload();
  }

  formatHour(hour: string): string {
    // Parsea la cadena de hora en un objeto Date para luego formatearla
    const date = new Date(`2000-01-01T${hour}:00`);
    const formattedHour = date.toTimeString().substring(0, 5); // Obtiene solo la parte de HH:mm
    return formattedHour;
  }
  
}