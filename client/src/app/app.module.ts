import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routes
import { AppRoutingModule } from './app-routing.module';

// Page
import { AppComponent } from './app.component';

// Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';
import { PgDashboardComponent } from './modules/main/pages/dashboard/pg-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    PgDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Angular material
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
