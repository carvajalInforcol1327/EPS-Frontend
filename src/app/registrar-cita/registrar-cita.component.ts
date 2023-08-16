import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.component.html',
  styleUrls: ['./registrar-cita.component.css']
})
export class RegistrarCitaComponent implements OnInit{

    cita: Cita = new Cita();
    constructor(private citaServicie:CitaService, private router:Router){};


  ngOnInit(): void {
   console.log(this.cita)
  }

  guardarCita(){
    this.citaServicie.registrarCita(this.cita).subscribe(dato=>{
      this.recarga();
    },error => console.log(error));
  }

  recarga(): void {
    window.location.reload();
  }

  onSubmit(){
    this.guardarCita();
  }


}