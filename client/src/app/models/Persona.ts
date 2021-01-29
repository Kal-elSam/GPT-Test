import { Injectable } from '@angular/core';

export interface Persona {
    id?: number;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    direccion?: string;
    telefono?: number;
    created_at?: Date
};
