import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Router
import { ClientsRoutingModule } from './client-routing.module';

// Pages
import { PgClientComponent } from './pages/client/pg-client.component';


@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PgClientComponent
  ]
})
export class ClientsModule { }