import { delay, switchMap } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CustomPreloadingStrategy implements PreloadingStrategy {

  constructor(private authService: AuthService) {
  }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    // console.debug('route', route);
    // return fn();
    // return of(true).pipe(delay(7000), switchMap(b => fn()))

    // route.data.roles
    if (route.data && route.data.preload) {
      return fn();
    }
    else {
      return of(false);
    }

  }

}
