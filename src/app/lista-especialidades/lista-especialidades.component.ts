import { Component, OnInit } from '@angular/core';
import { Especialidad } from '../especialidad';
import { EspecialidadService } from '../especialidad.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-especialidades',
  templateUrl: './lista-especialidades.component.html',
  styleUrls: ['./lista-especialidades.component.css']
})
export class ListaEspecialidadesComponent implements OnInit {

  especialidad: Especialidad[] = [];


  constructor(private especialidadService: EspecialidadService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.especialidadService.listarEspecialidad()
      .subscribe(response => {
        this.especialidad = response.map(especialidad => ({
          ...especialidad,
          estadoTraducido: especialidad.enabled ? 'Activo' : 'Cancelado'
        }));
      });
  }
  

  ActualizarEspecialidad(especialidad_id:number):void{
    this.router.navigate(['actualizarEspecialidad',especialidad_id])
  }

  

}
