import { Injectable } from '@angular/core';
import { Especialidad } from './especialidad';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

}
