import { Component, OnInit, ViewChild, ElementRef,EventEmitter,Output, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {


  @HostBinding('class') classes = 'row';

  personas: any = [];

  constructor(private personaService: PersonaService, ) { }


  ngOnInit() {
    this.getPersonas();
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe(
      res => {
        this.personas = res;
      },
      err => console.error(err)
    );
  }

  deletePersona(id: string) {
    this.personaService.deletePersona(id)
      .subscribe(
        res => {
          console.log(res);
          this.getPersonas();
        },
        err => console.error(err)
      )
  }

}
