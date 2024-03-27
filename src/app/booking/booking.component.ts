import { Component } from '@angular/core';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  appointmentTitle: String = '';
  appointmentDate: Date = new Date();
  message: string = '';

  constructor(public appointmentServices: AppointmentService) {}

  addAppointments() {
    if (this.appointmentTitle.trim().length > 0 && this.appointmentDate) {
      this.message = 'Task Adding Successful 👌';

      let newAppointment: Appointment = {
        id: Math.floor(Math.random() * 100000),
        title: this.appointmentTitle,
        date: this.appointmentDate,
      };
      this.appointmentServices.appointments.push(newAppointment);
      localStorage.setItem(
        'appointments',
        JSON.stringify(this.appointmentServices.appointments)
      );
      (this.appointmentTitle = ''), (this.appointmentDate = new Date());
    } else {
      this.message =
        '🚫 Please fill all the required details and then click the add button';
    }
  }
}
