import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgClientComponent } from './pages/client/pg-client.component';
const routes: Routes = [
  { path:'cliente', component : PgClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
