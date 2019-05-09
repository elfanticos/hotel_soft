import {Component, OnInit} from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Subscription } from 'rxjs';

@Component({
    selector:'cs-user-permission',
    templateUrl : 'cs-user-permission.component.html',
    styleUrls : ['cs-user-permission.component.scss']
})

export class CsUserPermisionComponent implements OnInit{
    permissions:any[] = [
        {desc_system : 'Inicio', icon :'home', link : '/home'},
        {desc_system : 'Reservas', icon : 'event_note', link : '/reservas/reservacion'},
        {desc_system : 'Cajas', icon : 'local_atm', link : '/cajas/caja'},
        {desc_system : 'Punto de venta', icon : 'local_grocery_store', link : '/ventas/venta'},
        {desc_system : 'Clientes', icon : 'perm_identity', link : '/clientes/cliente'}
    ]
    subs_header:Subscription = new Subscription();
    constructor(
        private _appService:AppService
    ) {
    }

    ngOnInit():void {
    }

    toggle():void {
        this._appService.sub_header$.next();
    }
}