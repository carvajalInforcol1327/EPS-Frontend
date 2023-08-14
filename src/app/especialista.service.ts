import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Especialista } from './especialista';
import { Observable } from 'rxjs';
import { Especialidad } from './especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {

  private baseURL = "http://localhost:8080/eps/especialista";
  constructor(private httpClient : HttpClient) { }

  listarEspecialidad() : Observable<Especialidad[]>{
    return this.httpClient.get<Especialidad[]>(`${this.baseURL}`);
  }

  crearEspecialista(especialista : Especialista): Observable<Especialista> {
    return this.httpClient.post<Especialista>(`${this.baseURL}`,especialista);
}

buscarEspecialistaId(cedula:number): Observable<Especialista>{
  return this.httpClient.get<Especialista>(`${this.baseURL}/${cedula}`);
}

actualizarEspecialista(cedula:number,especialista:Especialista): Observable<Especialista>{
  return this.httpClient.put<Especialista>(`${this.baseURL}/${cedula}`,especialista);
}

  obtenerListaDeEspecialistas(): Observable<Especialista[]>{
    return this.httpClient.get<Especialista[]>(`${this.baseURL}`);
  }



}
