import { Injectable } from '@angular/core';
import { Appointment } from './model/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  public appointments: Appointment[] = [];

  constructor() {}
}
