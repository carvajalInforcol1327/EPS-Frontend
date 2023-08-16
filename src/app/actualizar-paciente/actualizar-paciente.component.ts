import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-paciente',
  templateUrl:'./actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit{

  cedula:number;
  paciente:Paciente = new Paciente();

  constructor(private pacienteService:PacienteService, private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
      this.cedula = this.route.snapshot.params['cedula'];
      this.pacienteService.obtenerPacienteCedula(this.cedula).subscribe(dato =>{
        this.paciente = dato;
      },error => console.log(error));
  }

  irAlaListaPacientes(){
    this.router.navigate(['/listapacientes']);
  }

  onSubmit(){
    this.pacienteService.actualizarPaciente(this.cedula,this.paciente).subscribe(dato =>{
      this.irAlaListaPacientes();
    },error => console.log(error));
  }



}