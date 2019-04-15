import { Injectable} from "@angular/core";
// import { Observable, Subject, BehaviorSubject } from "rxjs";
// import { HeadersService } from "./core/headers.service";
import { HttpClient, HttpParams } from "@angular/common/http";
// import {Globals} from './globals';
// import {User, Hijo} from './main/models/user.model';
import { Observable } from "rxjs/internal/Observable";
import { Subject} from "rxjs";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class AppService {
    // Observable de header
    sub_header$: Subject<any> = new Subject<any>();
    header$: Observable<any> = this.sub_header$.asObservable();
    constructor(
        public _httpClient: HttpClient
    ) {
    }
}
