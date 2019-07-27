import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AppService } from './app.service';
import { Subscription } from 'rxjs';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  @ViewChild('sidenav') sidenav:MatSidenav;
  title = 'client';
  subs_header:Subscription = new Subscription();
  reason = '';
  constructor(
    private _appService : AppService,
    public _globals: Globals
    ) {
      this._appService.user.next({permisos : [
        {desc_system : 'Inicio'  , icon :'home', link : '/home'},
        {desc_system : 'Reservas', icon : 'event_note', link : '/reservas/reservacion'},
        {desc_system : 'Cajas'   , icon : 'local_atm', link : '/cajas/caja'},
        {desc_system : 'Punto de venta', icon : 'local_grocery_store', link : '/ventas/venta'},
        {desc_system : 'Clientes', icon : 'perm_identity', link : '/clientes/cliente'}
    ]});
    this._globals.__PERMISSION_SELECTED = {
      desc_system : 'Inicio', 
      icon        : 'home', 
      link        : '/home'
    };
  }

  ngOnInit():void {
    this.subs_header = this._appService.header$.subscribe(() => {
      this.sidenav.toggle();
    });
  }

  ngOnDestroy():void {
    this.subs_header.unsubscribe();
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
