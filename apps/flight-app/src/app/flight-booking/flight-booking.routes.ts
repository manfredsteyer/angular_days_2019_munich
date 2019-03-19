import { CanExitGuard } from './../shared/exit/exit.guard';
import { AuthGuard } from './../shared/auth/auth.guard';
import {Routes} from '@angular/router';
import {FlightBookingComponent} from './flight-booking.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';
import { FlightResolver } from './flight-edit/flight.resolver';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivate: [],
        component: FlightBookingComponent,
        children: [
          {
            path: 'flight-search',
            component: FlightSearchComponent
          },
          {
            path: 'passenger-search',
            component: PassengerSearchComponent
          },
          {
            path: 'flight-edit/:id',
            component: FlightEditComponent,
            canDeactivate: [CanExitGuard],
            resolve: {
              flight: FlightResolver
            }
          }
        ]
      },

    ]
  }
];
