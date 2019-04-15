import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Routes
import { AppRoutingModule } from './app-routing.module';

// Page
import { AppComponent } from './app.component';
import { PgDashboardComponent } from './modules/main/pages/dashboard/pg-dashboard.component';

// Components
import {CsHeaderComponent} from './base/components/cs-header/cs-header.component';
import { CsUserPermisionComponent } from './base/components/cs-user-permission/cs-user-permission.component';
import { CsLoginComponent } from './auth/components/cs-login/cs-login.component';

// Service
import { AppService } from './app.service';

// Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    PgDashboardComponent,
    // Components
    CsHeaderComponent,
    CsUserPermisionComponent,
    CsLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Angular material
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AppService,Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
