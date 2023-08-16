import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private user: User;

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

}