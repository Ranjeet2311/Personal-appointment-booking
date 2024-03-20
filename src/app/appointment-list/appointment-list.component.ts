import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent implements OnInit {
  constructor(public appointmentService: AppointmentService) {}

  deleteAppointment(index: number) {
    this.appointmentService.appointments.splice(index, 1);
    localStorage.setItem(
      'appointments',
      JSON.stringify(this.appointmentService.appointments)
    );
  }

  ngOnInit(): void {
    console.log(`onInIt ran`);
    let savedAppointment = localStorage.getItem('appointments');
    console.log(`savedAppointment : `, savedAppointment);
    this.appointmentService.appointments = savedAppointment
      ? JSON.parse(savedAppointment)
      : [];
  }
}
