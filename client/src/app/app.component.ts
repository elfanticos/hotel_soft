import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AppService } from './app.service';
import { CdkTreeNodeToggle } from '@angular/cdk/tree';
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
