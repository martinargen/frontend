import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("","","","");
  
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(
      (data: Persona) => {
        this.persona = data;
        console.log('Datos de la persona:', this.persona);
        this.persona.img = 'http://localhost:8081/' + this.persona.img;
      },
      (error) => {
        console.error('Error al obtener los datos de la persona:', error);
      }
    );
  }

}
