import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgDashboardComponent } from './modules/main/pages/dashboard/pg-dashboard.component';
const routes: Routes = [
  {path:'', component : PgDashboardComponent}
  // {path:'dashboard', loadChildren:'app/modules/main/main.module#MainModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
