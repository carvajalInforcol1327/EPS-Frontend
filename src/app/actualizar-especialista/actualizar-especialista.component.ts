import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Especialista } from '../especialista';
import { EspecialistaService } from '../especialista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidad } from '../especialidad';
import { EspecialidadService } from '../especialidad.service';

@Component({
  selector: 'app-actualizar-especialista',
  templateUrl: './actualizar-especialista.component.html',
  styleUrls: ['./actualizar-especialista.component.css'],
})
export class ActualizarEspecialistaComponent implements OnInit {
  especialidades: Especialidad[] = [];

  cedula: number;
  especialista: Especialista = new Especialista();
  constructor(
    private especialistaService: EspecialistaService,
    private router: Router,
    private route: ActivatedRoute,
    private especialidadService: EspecialidadService
  ) {}

  ngOnInit(): void {
    this.cedula = this.route.snapshot.params['cedula'];
    this.especialistaService.buscarEspecialistaId(this.cedula).subscribe(
      (response) => {
        this.especialista = response;

        // Cargar las especialidades después de obtener el especialista
        this.cargarEspecialidades();

        // Mostrar la información del especialista cargada
        console.log('Especialista cargado:', this.especialista);

        // Establecer la especialidad seleccionada en el formulario
        const especialidadEncontrada = this.especialidades.find(
          (e) =>
            e.especialidad_id ===
            this.especialista.especialidad?.especialidad_id
        );
        if (especialidadEncontrada) {
          this.especialista.especialidad = especialidadEncontrada;
          console.log(
            'Especialidad del especialista:',
            this.especialista.especialidad
          );
        } else {
          console.log('Especialidad no encontrada para el especialista.');
        }
      },
      (error) => console.log(error)
    );
  }

  cargarEspecialidades() {
    this.especialidadService.listarEspecialidad().subscribe(
      (response) => {
        this.especialidades = response;
        console.log('Especialidades cargadas:', this.especialidades);
      },
      (error) => console.error(error)
    );
  }

  irListaEspecialista() {
    this.router.navigate(['/lista-especialista']);
    Swal(
      'Especialista actualizado',
      `El especialista ${this.especialista.nombres} fue actualizado con exito`,
      `success`
    );
  }

  onSubmit() {
    this.especialistaService.actualizarEspecialista(this.cedula, this.especialista)
      .subscribe(
        (response) => {
          this.irListaEspecialista();
        },
        (error) => console.log(error)
      );
  }
  

  crearEspecialista() {
    // Método para crear un nuevo especialista
    this.especialistaService
      .crearEspecialista(this.especialista)
      .subscribe((response) => console.log('EXITO!!'));
  }
/*
  limpiarCampos() {
    this.especialista = new Especialista(); // Restablece a un objeto Especialista nuevo    
  }*/
}
