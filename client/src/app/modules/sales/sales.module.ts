import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Router
import { SalesRoutingModule } from './sales-routing.module';

// Pages
import { PgSalesComponent } from './pages/sales/pg-sales.component';

@NgModule({
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PgSalesComponent
  ]
})
export class SalesModule { }