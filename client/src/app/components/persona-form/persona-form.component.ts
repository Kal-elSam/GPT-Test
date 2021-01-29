import { Component, HostBinding, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { Router, ActivatedRoute } from '@angular/router';

import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  persona: Persona = {
    id: 0,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    direccion: '',
    telefono: 0,
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private personaService: PersonaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.personaService.getPersona(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.persona = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewPerson() {
    delete this.persona.created_at;
    delete this.persona.id;

    this.personaService.savePersona(this.persona)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/personas']);
        },
        err => console.error(err)
      )
  }

  updatePersona() {
    delete this.persona.created_at;

    this.personaService.updatePersona(this.persona.id, this.persona)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/personas']);
        },
        err => console.log(err)
      )
  }

}
