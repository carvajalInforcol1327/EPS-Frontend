import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-listar-citas-pacientes',
  templateUrl: './listar-citas-pacientes.component.html',
  styleUrls: ['./listar-citas-pacientes.component.css']
})



export class ListarCitasPacientesComponent implements OnInit {

  citas:Cita[];
  cedula:number;
  nombre:string;

  constructor(private citaservice:CitaService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.cedula = this.route.snapshot.params['cedula'];
    this.citaservice.obtenerListaDeCitasPorPaciente(this.cedula).subscribe(dato =>{
      this.citas = dato;
    },error => console.log(error));
  }


}
