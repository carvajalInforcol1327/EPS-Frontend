import { Injectable } from '@angular/core';
import { Cita } from './cita';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Especialidad } from './especialidad';
import { Especialista } from './especialista';



@Injectable({
  providedIn: 'root'
})
export class CitaService {


  private baseURL = "http://localhost:8080/eps/cita";

  constructor(private httpClient : HttpClient) { }

  registrarCita(cita: Cita): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, cita);
  }

  listarEspecialidad():Observable<Especialidad[]>{
    return this.httpClient.get<Especialidad[]>(`${this.baseURL}`);
  }

  listarEspecialistas():Observable<Especialista[]>{
    return this.httpClient.get<Especialista[]>(`${this.baseURL}`);
  }
  
  obtenerListaDeCitas(): Observable<Cita[]>{
    return this.httpClient.get<Cita[]>(`${this.baseURL}`);
  }

  actualizarcita(id:number,cita:Cita) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cita);
  }

  obtenerListaDeCitasPorPaciente(cedula:number): Observable<Cita[]>{
    return this.httpClient.get<Cita[]>(`${this.baseURL}/paciente/${cedula}`);
  }

  obtenerListaDeCitasPorEspecialista(cedula:number): Observable<Cita[]>{
    return this.httpClient.get<Cita[]>(`${this.baseURL}/especialista/${cedula}`);
  }

  buscarCitaId(id:number): Observable<Cita>{
    return this.httpClient.get<Cita>(`${this.baseURL}/${id}`);
  }
}
