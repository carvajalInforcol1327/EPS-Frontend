import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from '../login.service';
import { Location } from '@angular/common';
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username" : '',
    "password" : '',
  }


 user:User;

  constructor(private snack:MatSnackBar,private router:Router,private loginService:LoginService, private location: Location, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    window.addEventListener('popstate', () => {
      this.location.forward();
    });
  }

  formSubmit(){

    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('La contraseña es requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }

    this.loginService.obtenerUsuarioPorUsername(this.loginData.username).subscribe(dato =>{
      this.user = dato;

      if(this.user != null){
        if(this.user.contrasena == this.loginData.password){
            this.irALaInicio();
            this.sharedDataService.setUser(this.user);
        }else{
          this.snack.open('La contraseña es invalida !!','Aceptar',{
            duration:3000
          })
          return;
        }

      }else{
        this.snack.open('Usuario inexistente !!','Aceptar',{
          duration:3000
        })
        return;
      }

    })

  }

  irALaInicio(){
    this.router.navigate(['/dashboard']);
  }



}