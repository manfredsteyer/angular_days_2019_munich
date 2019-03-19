import { FlightEditComponent } from './../../flight-booking/flight-edit/flight-edit.component';


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanExitComponent {
  canExit(): Observable<boolean>;
}

@Injectable()
export class CanExitGuard implements CanDeactivate<CanExitComponent> {
  canDeactivate(
    component: CanExitComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    return component.canExit();

  }
}
