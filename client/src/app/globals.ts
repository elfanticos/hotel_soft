import { Injectable } from '@angular/core';
import { IPermission } from './auth/models/User';

@Injectable()
export class Globals {
    __VIEW_LOGIN :boolean = true;
    __PERMISSION_SELECTED:IPermission = {};
}