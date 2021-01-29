import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  // static getPersonaq(): Persona[] {
  //   throw new Error('Method not implemented.');
  // }


  getPersonaq() {
    return this.http.get(`${this.API_URI}`);
  }

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get(`${this.API_URI}/personas`);
  }

  getPersona(id: string) {
    return this.http.get(`${this.API_URI}/personas/${id}`);
  }

  deletePersona(id: string) {
    return this.http.delete(`${this.API_URI}/personas/${id}`);
  }

  savePersona(persona: Persona) {
    return this.http.post(`${this.API_URI}/personas`, persona);
  }

  updatePersona(id: number|undefined, updatedPersona: Persona): Observable<Persona> {
    return this.http.put(`${this.API_URI}/personas/${id}`, updatedPersona);
  }
}
