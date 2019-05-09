import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Routing
import { MainRoutingModule } from './main-routing.module';

// Page
import { PgDashboardComponent } from './pages/dashboard/pg-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PgDashboardComponent
  ]
})
export class MainModule { }