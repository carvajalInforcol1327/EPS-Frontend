import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from '../cita.service';
import { Cita } from '../cita';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  pacientes:Paciente[];
  citas:Cita[];
  paciente:Paciente = new Paciente();
  datosOriginales: any[];
  datosFiltrados: any[];
  filtro: string;

  cedula:number;
  cedula2:number;

  constructor(private citaservice:CitaService, private pacienteService:PacienteService, private router:Router,private route:ActivatedRoute,private location: Location){}

  ngOnInit(): void {
      this.obtenerPacientes();
  }


  private obtenerPacientes(){
    this.pacienteService.obtenerListaDePacientes().subscribe(dato =>{
      this.pacientes = dato.filter((paciente) => paciente.enabled === true);
      this.datosOriginales = this.pacientes;
      this.datosFiltrados = [...this.datosOriginales];
    });

    }

    actualizarPaciente(cedula:number){
      this.router.navigate(['actualizar-paciente',cedula])
    }

    envioCitasPaciente(cedula:number){
      this.router.navigate(['lista-citas-paciente',cedula])
    }

    eliminarPaciente(cedula2:number){
      //OBTENER EL PACIENTE
      this.pacienteService.obtenerPacienteCedula(cedula2).subscribe(dato =>{
        this.paciente = dato;
        console.log(cedula2)

        this.pacienteService.actualizarPacienteEliminar(cedula2,this.paciente).subscribe(dato =>{
          console.log(cedula2)
          window.location.reload();
        },error => console.log(error));



      },error => console.log(error));
    }

    filtrarDatos() {
      this.datosFiltrados = this.datosOriginales.filter((dato) => {
        // Realiza la lógica de filtrado según tus necesidades
        // Verifica si el valor de la propiedad 'evento' contiene el término de búsqueda
        return dato.nombres.toLowerCase().includes(this.filtro.toLowerCase());
      });
    }



  }




