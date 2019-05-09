import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgSalesComponent } from './pages/sales/pg-sales.component';
const routes: Routes = [
  { path:'venta', component : PgSalesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
