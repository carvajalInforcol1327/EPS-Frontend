import { Component, OnInit} from '@angular/core';
import { CitaService } from '../cita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../cita';

@Component({
  selector: 'app-listar-citas-todas',
  templateUrl: './listar-citas-todas.component.html',
  styleUrls: ['./listar-citas-todas.component.css']
})
export class ListarCitasTodasComponent implements OnInit {

  citas:Cita[]
  datosOriginales: any[];
  datosFiltrados: any[];
  filtro: string;

  constructor(private citaservice:CitaService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.obtenerCitas();
  }

  private obtenerCitas(){
    this.citaservice.obtenerListaDeCitas().subscribe(dato =>{
      this.citas = dato;
      this.datosOriginales = this.citas;
      this.datosFiltrados = [...this.datosOriginales];
      console.log(this.citas);
    })
  }

  filtrarDatos() {
    this.datosFiltrados = this.datosOriginales.filter((dato) => {
      // Realiza la lógica de filtrado según tus necesidades
      // Verifica si el valor de la propiedad 'evento' contiene el término de búsqueda
      return dato.fecha.toLowerCase().includes(this.filtro.toLowerCase());
    });
  }

}
