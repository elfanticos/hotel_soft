import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgReservationComponent } from './pages/reservation/pg-reservation.component';
const routes: Routes = [
  { path:'reservacion', component : PgReservationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
