import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialista } from '../especialista';
import { EspecialistaService } from '../especialista.service';

@Component({
  selector: 'app-lista-especialistas',
  templateUrl: './lista-especialistas.component.html',
  styleUrls: ['./lista-especialistas.component.css']
})
export class ListaEspecialistasComponent implements OnInit {

  especialista: Especialista[]; //

  constructor(private especialistaService: EspecialistaService,private router:Router,private route:ActivatedRoute) { }

  datosOriginales: any[];
  datosFiltrados: any[];
  filtro: string;

  ngOnInit(): void {
    this.obtenerEspecialistas();
  }

  private obtenerEspecialistas(){
    this.especialistaService.obtenerListaDeEspecialistas().subscribe(response =>{
      this.especialista = response;
      this.datosOriginales = this.especialista;
      this.datosFiltrados = [...this.datosOriginales];
      console.log(this.especialista);
       })
    }


  filtrarDatos() {
    this.datosFiltrados = this.datosOriginales.filter((dato) => {
      // Realiza la lógica de filtrado según tus necesidades
      // Verifica si el valor de la propiedad 'evento' contiene el término de búsqueda
      return dato.nombres.toLowerCase().includes(this.filtro.toLowerCase());
    });
  }

  ActualizarEspecialista(cedula:number):void{
    this.router.navigate(['actualizar-especialista',cedula])
  }

}
