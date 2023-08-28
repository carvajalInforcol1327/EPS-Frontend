import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidad } from './especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  baseURL = "http://localhost:8080/eps/especialidad"

  constructor(private httpClient : HttpClient) { }
  
  crearEspecialidad(especialidad:Especialidad) : Observable<Especialidad>{
    return this.httpClient.post<Especialidad>(`${this.baseURL}`,especialidad)
  }

  listarEspecialidad() : Observable<Especialidad[]>{
    return this.httpClient.get<Especialidad[]>(`${this.baseURL}`);
  }

 actualizarEspecialidad(especialidad_id:number,especialidad:Especialidad):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${especialidad_id}`,especialidad);
 }

 obtenerEspecialidadxid(especialidad_id:number) : Observable<Especialidad>{
  return this.httpClient.get<Especialidad>(`${this.baseURL}/${especialidad_id}`);
 }

}
