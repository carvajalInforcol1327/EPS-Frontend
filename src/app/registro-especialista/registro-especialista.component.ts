// Importaciones necesarias
import { Component, OnInit } from '@angular/core';
import { Especialista } from '../especialista'; // Importa la clase Especialista
import { EspecialistaService } from '../especialista.service'; // Importa el servicio EspecialistaService
import { Especialidad } from '../especialidad'; // Importa la clase Especialidad
import { EspecialidadService } from '../especialidad.service'; // Importa el servicio EspecialidadService

@Component({
  selector: 'app-registro-especialista',
  templateUrl: './registro-especialista.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./registro-especialista.component.css'] // Estilos CSS asociados al componente
})
export class RegistroEspecialistaComponent implements OnInit {

  especialista: Especialista = new Especialista(); // Instancia de la clase Especialista para el registro

  especialidades: Especialidad[] = []; // Arreglo para almacenar la lista de especialidades

  constructor(
    private especialistaService: EspecialistaService,
    private especialidadService: EspecialidadService
  ) {}

  ngOnInit(): void {
    // Método llamado al inicializar el componente
    // Se obtiene la lista de especialidades desde el servicio
    this.especialidadService.listarEspecialidad()
      .subscribe(response => this.especialidades = response);
      console.log("Lista de especialidades:", this.especialidades);
  }

  crearEspecialista() {
    // Método para crear un nuevo especialista
    this.especialistaService.crearEspecialista(this.especialista)
      .subscribe(response => console.log("EXITO!!"));
    this.limpiarCampos(); // Llama al método para limpiar los campos
  }

  limpiarCampos() {
    this.especialista = new Especialista(); // Restablece a un objeto Especialista nuevo
  }
}
