import { Injectable } from '@angular/core';
import { Cita } from './cita';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitaService {


  private baseURL = "http://localhost:8080/eps/cita";

  constructor(private httpClient : HttpClient) { }

  registrarCita(cita:Cita) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cita)
  }
}
