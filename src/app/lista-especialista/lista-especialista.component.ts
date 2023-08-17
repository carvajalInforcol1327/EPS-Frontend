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

  especialista: Especialista[] = []; // Arreglo para almacenar la lista de especialistas

  constructor(private especialistaService: EspecialistaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // Método llamado al inicializar el componente
    // Se obtiene la lista de especialistas desde el servicio
    this.especialistaService.listarEspecialista()
      .subscribe(response =>this.especialista = response); // Se asigna la respuesta a la propiedad especialista
  }
  
  ActualizarEspecialista(cedula:number):void{
    this.router.navigate(['actualizarEspecialista',cedula])
  }

}


