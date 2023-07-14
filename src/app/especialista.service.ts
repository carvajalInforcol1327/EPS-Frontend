import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Especialista } from './especialista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {

  private baseURL = "http://localhost:8080/eps/especialista";
  constructor(private httpClient : HttpClient) { }

  registrarEspecialista(especialista:Especialista) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,especialista)
  }
}
