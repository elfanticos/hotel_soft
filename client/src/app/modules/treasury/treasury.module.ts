import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Router
import { TreasuryRoutingModule } from './treasury-routing.module';

// Pages
import { PgTreasuryComponent } from './pages/treasury/pg-treasury.component';

@NgModule({
  imports: [
    CommonModule,
    TreasuryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PgTreasuryComponent
  ]
})
export class TreasuryModule { }