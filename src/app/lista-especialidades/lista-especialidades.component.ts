import { Component, OnInit } from '@angular/core';
import { Especialidad } from '../especialidad';
import { EspecialidadService } from '../especialidad.service';

@Component({
  selector: 'app-lista-especialidades',
  templateUrl: './lista-especialidades.component.html',
  styleUrls: ['./lista-especialidades.component.css']
})
export class ListaEspecialidadesComponent implements OnInit {

  especialidad: Especialidad[] = [];

  constructor(private especialidadService: EspecialidadService) {}

  ngOnInit(): void {
    // Al inicializar el componente, se llama al servicio para obtener la lista de especialidades
    this.especialidadService.listarEspecialidad()
      .subscribe(response => this.especialidad = response);
  }
}
