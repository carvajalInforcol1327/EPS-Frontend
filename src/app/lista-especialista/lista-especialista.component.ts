// Importación de los módulos necesarios
import { Component, OnInit } from '@angular/core';
import { Especialista } from '../especialista'; // Importa la clase Especialista
import { EspecialistaService } from '../especialista.service'; // Importa el servicio EspecialistaService
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-especialista',
  templateUrl: './lista-especialista.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./lista-especialista.component.css'] // Estilos CSS asociados al componente
})
export class ListaEspecialistaComponent implements OnInit {

especialistas: Especialista[] = []; // Arreglo para almacenar la lista de especialistas
 prueba : any[];

  constructor(private especialistaService: EspecialistaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerEspecialistas();
  }

  private obtenerEspecialistas() {
    this.especialistaService.listarEspecialista().subscribe(dato => {
      this.especialistas = dato;
      this.prueba = this.especialistas.map(especialista => ({
        ...especialista,
        enabled: especialista.enabled  ? 'Activo' : 'Cancelada'
      }));

      });
  }
  
  
  ActualizarEspecialista(cedula:number):void{
    this.router.navigate(['actualizarEspecialista',cedula])
  }

}


