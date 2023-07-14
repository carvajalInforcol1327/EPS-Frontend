import { Component, OnInit } from '@angular/core';
import { Especialista } from '../especialista';
import { EspecialistaService } from '../especialista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-especialista',
  templateUrl: './registrar-especialista.component.html',
  styleUrls: ['./registrar-especialista.component.css'],
})
export class RegistrarEspecialistaComponent implements OnInit {

  especialista: Especialista = new Especialista();
  constructor( private especialistaService: EspecialistaService,  private router: Router ) {}

  ngOnInit(): void {
  console.log(this.especialista)
  }


  guardarEspecialista(){
    this.especialistaService.registrarEspecialista(this.especialista).subscribe(dato=>{
        this.recarga();
    },error => console.log(error));
  }

  recarga(){
    window.location.reload();
  }

  onSubmit(){
    this.guardarEspecialista();
  }

}
