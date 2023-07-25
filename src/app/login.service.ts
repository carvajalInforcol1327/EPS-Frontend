import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080/usuario";

  constructor(private httpClient : HttpClient) { }

  obtenerUsuarioPorUsername(username:string) : Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${username}`)
  }


}
