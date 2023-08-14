import { Component, OnInit } from '@angular/core';
import { Especialista } from '../especialista';
import { EspecialistaService } from '../especialista.service';
import { Router } from '@angular/router';
import { EspecialidadService } from '../especialidad.service';
import { Especialidad } from '../especialidad';

@Component({
  selector: 'app-registrar-especialista',
  templateUrl: './registrar-especialista.component.html',
  styleUrls: ['./registrar-especialista.component.css'],
})
export class RegistrarEspecialistaComponent implements OnInit {

  especialista: Especialista = new Especialista();
  especialidades: Especialidad[];

  constructor( private especialistaService: EspecialistaService, private especialidadService:EspecialidadService,  private router: Router ) {}

  ngOnInit(): void {
    this.listarEspecialidades();
  }

  listarEspecialidades(){
    this.especialidadService.listarEspecialidad().subscribe(response =>{
      this.especialidades = response;
      console.log(this.especialidades);
    });
  }


  guardarEspecialista(){
     // Método para crear un nuevo especialista
     this.especialistaService.crearEspecialista(this.especialista)
     .subscribe(response => console.log("EXITO!!"));
     this.recarga(); // Llama al método para limpiar los campos
  }

  recarga(){
    window.location.reload();
  }

  onSubmit(){
    this.guardarEspecialista();
  }

  limpiarCampos() {
    this.especialista = new Especialista(); // Restablece a un objeto Especialista nuevo
  }

}
