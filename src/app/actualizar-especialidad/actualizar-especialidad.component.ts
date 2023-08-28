import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadService } from '../especialidad.service';
import { Especialidad } from '../especialidad';

@Component({
  selector: 'app-actualizar-especialidad',
  templateUrl: './actualizar-especialidad.component.html',
  styleUrls: ['./actualizar-especialidad.component.css']
})
export class ActualizarEspecialidadComponent implements OnInit{
  especialidad_id:number;
  especialidad : Especialidad = new Especialidad();

  constructor(private route : ActivatedRoute , private router : Router,private especialidadService:EspecialidadService){}

  ngOnInit(): void {
    this.especialidad_id = this.route.snapshot.params['especialidad_id'];
    this.especialidadService.obtenerEspecialidadxid(this.especialidad_id).subscribe(
      dato => {
       this.especialidad = dato;
      },
      error => {console.log(error);
      }
    );
  }
  


  irListaEspecialidad(){
    this.router.navigate(['lista-especialidades']);
    Swal(
      'Especialidad Actualizada',
      `La especialidad ${this.especialidad.nombre} fue actualizado con exito`,
      `success`
      );
  }

    onSubmit(){
      this.especialidadService.actualizarEspecialidad(this.especialidad_id,this.especialidad)
      .subscribe((response) => {
        this.irListaEspecialidad();
      },(error) => console.log(error)
      );
    }

    crearEspecialidad(){
      this.especialidadService.crearEspecialidad(this.especialidad)
      .subscribe((response)=> console.log('EXITO'));
    }

}
