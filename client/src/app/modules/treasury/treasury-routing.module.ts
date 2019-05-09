import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgTreasuryComponent } from './pages/treasury/pg-treasury.component';
const routes: Routes = [
  { path:'caja', component : PgTreasuryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreasuryRoutingModule { }
