import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PersonaListComponent} from './components/persona-list/persona-list.component';
import { PersonaFormComponent } from './components/persona-form/persona-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/personas/add',
    pathMatch: 'full'
  },
  {
    path:'personas',
    component: PersonaListComponent
  },
  {
    path: 'personas/add',
    component: PersonaFormComponent
  },
  {
    path: 'personas/edit/:id',
    component: PersonaFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
