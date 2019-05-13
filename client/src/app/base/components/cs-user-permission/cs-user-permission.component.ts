import {Component, OnInit, OnDestroy} from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IPermission, IUser } from 'src/app/auth/models/User';
import { Globals } from 'src/app/globals';

@Component({
    selector:'cs-user-permission',
    templateUrl : 'cs-user-permission.component.html',
    styleUrls : ['cs-user-permission.component.scss']
})

export class CsUserPermisionComponent implements OnInit, OnDestroy{
    permissions:IPermission[] = [];
    subs_header:Subscription = new Subscription();
    sub_user:Subscription = new Subscription();
    constructor(
        private _appService:AppService,
        public _globals:Globals
    ) {
    }

    ngOnInit():void {
        this.sub_user = this._appService.user.pipe(filter(fil=> fil != null)).subscribe(user => {
            this.permissions = user.permisos;
        });
    }

    ngOnDestroy():void {
        this.sub_user.unsubscribe();
    }

    toggle():void {
        this._appService.sub_header$.next();
    }
}