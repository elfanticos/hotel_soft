import { Injectable} from "@angular/core";
// import { Observable, Subject, BehaviorSubject } from "rxjs";
// import { HeadersService } from "./core/headers.service";
import { HttpClient, HttpParams } from "@angular/common/http";
// import {Globals} from './globals';
import { Observable } from "rxjs/internal/Observable";
import { Subject, BehaviorSubject} from "rxjs";
import { IUser } from './auth/models/User';

@Injectable()
export class AppService {
    // Observable de header
    sub_header$: Subject<any>  = new Subject<any>();
    header$: Observable<any>   = this.sub_header$.asObservable();
    user = new BehaviorSubject<IUser>(null);
    constructor(
        public _httpClient: HttpClient
    ) {
        
    }
}
