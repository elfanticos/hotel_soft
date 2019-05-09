import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Router
import { ReservationRoutingModule } from './reservation-routing.module';

// Pages
import { PgReservationComponent } from './pages/reservation/pg-reservation.component';

@NgModule({
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PgReservationComponent
  ]
})
export class ReservationModule { }