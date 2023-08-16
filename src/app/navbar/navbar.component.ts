import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SharedDataService } from '../shared-data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  user:User;
  nombre:string;
  constructor(private sharedDataService: SharedDataService, private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.obtenerUser();
    console.log(this.nombre);
  }

  obtenerUser(){
    this.user = this.sharedDataService.getUser(); // Obtiene el objeto this.user desde el servicio
    console.log(this.user)
  }


}