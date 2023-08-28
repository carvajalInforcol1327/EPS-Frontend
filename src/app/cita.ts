import { Especialista } from "./especialista"
import { Paciente } from "./paciente"

export class Cita {
  id:number
  fecha:string
  horaCita:string
  observacion:string
  especialista:Especialista
  paciente:Paciente
  enabled:boolean
}

