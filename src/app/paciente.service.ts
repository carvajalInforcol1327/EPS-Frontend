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

listarPaciente(): Observable<Paciente[]>{
  return this.httpClient.get<Paciente[]>(`${this.baseURL}`);
}

  registrarPaciente(paciente:Paciente) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,paciente)
  }

  obtenerListaDePacientes(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.baseURL}`);
  }

  actualizarPaciente(cedula:number,paciente:Paciente) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${cedula}`,paciente);
  }

  obtenerPacienteCedula(cedula:number): Observable<Paciente>{
    return this.httpClient.get<Paciente>(`${this.baseURL}/${cedula}`);
  }

  actualizarPacienteEliminar(cedula:number,paciente:Paciente) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/eliminar/${cedula}`,paciente);
  }

}
