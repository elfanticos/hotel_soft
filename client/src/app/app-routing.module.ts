import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsLoginComponent } from './auth/components/cs-login/cs-login.component';
const routes: Routes = [
  {path :''         , component : CsLoginComponent},
  {path :'home'     , loadChildren:'./modules/main/main.module#MainModule'},
  {path :'clientes' , loadChildren:'./modules/clients/client.module#ClientsModule'},
  {path :'reservas' , loadChildren:'./modules/reservation/reservation.module#ReservationModule'},
  {path :'cajas'    , loadChildren:'./modules/treasury/treasury.module#TreasuryModule'},
  {path :'ventas'   , loadChildren:'./modules/sales/sales.module#SalesModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
