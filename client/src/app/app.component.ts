import { NgModule, Component, enableProdMode, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {PersonaService} from './services/persona.service'
import { Persona } from './models/Persona';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonaService],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'client';
  // personas: Persona[];


  constructor(personaService: PersonaService) {
    // this.personas = PersonaService.getPersonaq();
  }
}
@NgModule({
  imports: [
    BrowserModule
  ]
})

export class AppModule {}

// platformBrowserDynamic().bootstrapModule(AppModule);
