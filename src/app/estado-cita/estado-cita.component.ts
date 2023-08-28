import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from '../cita.service';
import { Cita } from '../cita';
import { Paciente } from '../paciente';
import { Especialista } from '../especialista';
import { EspecialistaService } from '../especialista.service';
import { PacienteService } from '../paciente.service';


@Component({
  selector: 'app-estado-cita',
  templateUrl: './estado-cita.component.html',
  styleUrls: ['./estado-cita.component.css']
})
export class EstadoCitaComponent {
  pacientes : Paciente[] = [];
  especialistas : Especialista [] = [];

  id:number;
  cita:Cita = new Cita();

constructor(private citaService:CitaService,
  private especialistaService : EspecialistaService,
  private pacienteService : PacienteService,
  private router:Router,
  private route:ActivatedRoute ){}



ngOnInit():void {
  this.id = this.route.snapshot.params['id'];
  this.citaService.buscarCitaId(this.id).subscribe(dato =>{
    this.cita = dato;

    this.cargarEspecialista();
    this.cargarPaciente();
    
  },error => console.log('Error al registrar la cita:', error?.error?.message));
}

onSubmit(){
  this.citaService.actualizarcita(this.id,this.cita).subscribe(dato=>{
    this.irListaCitas();
  },error => console.log('Error al registrar la cita:', error?.error?.message));
}

irListaCitas(){
  this.router.navigate(['listar-citas-todas']);
}

cargarEspecialista(){
  this.especialistaService.listarEspecialista().subscribe(
    (dato) =>{this.especialistas = dato;
      console.log('Especialista cargado',this.especialistas);
    }, (error) => console.error(error)
  );
}


cargarPaciente(){
this.pacienteService.listarPaciente().subscribe(
  (dato) => {this.pacientes = dato;
  console.log('Pacientes cargados', this.pacientes);
  },(error) => console.error(error)
);
}

}
