import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit{

  paciente: Paciente = new Paciente();
  constructor(private pacienteServicio:PacienteService, private router:Router){}

  ngOnInit(): void {
    console.log(this.paciente)
  }

  guardarPaciente(){
    this.pacienteServicio.registrarPaciente(this.paciente).subscribe(dato =>{
      this.recarga();
    },error => console.log(error));
  }

  recarga(): void {
    window.location.reload();
  }

  onSubmit(){
    this.guardarPaciente();
  }

}
