import { Component, OnInit } from '@angular/core';
import { Especialista } from '../especialista';
import { EspecialistaService } from '../especialista.service';
import { ActivatedRoute, Router } from '@angular/router';
import multiMonthPlugin from '@fullcalendar/multimonth'
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import { CitaService } from '../cita.service';
import { Cita } from '../cita';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-agendamiento',
  templateUrl: './agendamiento.component.html',
  styleUrls: ['./agendamiento.component.css']
})
export class AgendamientoComponent implements OnInit {

  especialistas:Especialista[]
  citas:Cita[];
  especialistaSeleccionado: number;
  Events = [];

  constructor(private httpClient:HttpClient, private especialistaService:EspecialistaService,private router:Router,private route:ActivatedRoute,private citaService:CitaService){}

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin,multiMonthPlugin],

    initialView: 'dayGridMonth',
    locale: esLocale,
    headerToolbar: {
      left: 'prev,next today multiMonthYear',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },


    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    events: [],



  };



  ngOnInit(): void {
    this.obtenerEspecialistas();
  }

  private obtenerEspecialistas(){
    this.especialistaService.obtenerListaDeEspecialistas().subscribe(dato =>{
      this.especialistas = dato;
      console.log(this.especialistas);
    })
  }

  onSubmit(){
    console.log(this.especialistaSeleccionado);
    this.citaService.obtenerListaDeCitasPorEspecialista(this.especialistaSeleccionado).subscribe(dato =>{
      this.citas = dato;
      console.log(this.citas);
      this.calendarOptions.events = dato.map(evento => ({
        id: evento.id.toString(),
        title: evento.observacion,
        start: evento.fecha,
        end: evento.fecha,
        backgroundColor: 'blue',
        textColor: 'white'
      }));
    })
  }

}
