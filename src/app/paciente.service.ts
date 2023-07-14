import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "http://localhost:8080/eps/paciente";

  constructor(private httpClient : HttpClient) { }

  registrarPaciente(paciente:Paciente) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,paciente)
  }


}
