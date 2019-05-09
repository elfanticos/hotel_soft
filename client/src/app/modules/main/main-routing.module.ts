import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgDashboardComponent } from './pages/dashboard/pg-dashboard.component';
const routes: Routes = [
  {path:'', component : PgDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
