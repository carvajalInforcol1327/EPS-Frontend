import { Component, OnInit } from '@angular/core';
import { Especialidad } from '../especialidad';
import { EspecialidadService } from '../especialidad.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registrar-especialidad',
  templateUrl: './registrar-especialidad.component.html',
  styleUrls: ['./registrar-especialidad.component.css']
})
export class RegistrarEspecialidadComponent implements OnInit {
  
  especialidad: Especialidad = new Especialidad();

  constructor(private especialidadService:EspecialidadService, private router:Router){}

  ngOnInit(): void {
    this.especialidadService.listarEspecialidad()
    .subscribe(response => console.log(response))
  }

  crearEspecialidad(){
    this.especialidadService.crearEspecialidad(this.especialidad)
    .subscribe(response => console.log("Especialidad creada!!"))
    this.limpiarCampos();
  }

  limpiarCampos() {
    this.especialidad = new Especialidad(); // Restablece a un objeto Especialidad nuevo
  }
}
