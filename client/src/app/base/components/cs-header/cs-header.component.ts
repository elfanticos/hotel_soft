import {Component, OnInit, OnDestroy} from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Subscription } from 'rxjs';
import { Globals } from 'src/app/globals';

@Component({
    selector : 'cs-header',
    templateUrl : 'cs-header.component.html',
    styleUrls : ['cs-header.component.scss']
})

export class CsHeaderComponent implements OnInit, OnDestroy {
    subs_header:Subscription = new Subscription();
    constructor(
        private _appService:AppService,
        public _globals:Globals
    ) {}

    ngOnInit():void {

    }

    ngOnDestroy():void {
    }

    toggle():void {
        this._appService.sub_header$.next();
    }
}