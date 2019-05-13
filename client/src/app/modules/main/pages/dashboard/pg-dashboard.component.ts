import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector    : 'pg-dashboard',
    templateUrl : 'pg-dashboard.component.html',
    styleUrls   : ['pg-dashboard.component.scss']
})

export class PgDashboardComponent {
    title:string = 'PgDashboardComponent';
    value:string = null;
    search:FormControl = new FormControl(null);
}