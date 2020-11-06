import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public routerSubscription: Subscription;

  constructor(private _router: Router) {
  }

  public ngOnInit(): void {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0));
  }

  public ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}
