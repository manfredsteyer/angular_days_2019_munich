import { Flight } from '@flight-workspace/flight-api';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CanExitComponent } from '../../shared/exit/exit.guard';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, CanExitComponent {
  id: string;
  showDetails: string;
  showWarning = false;
  sender: Observer<boolean>;
  flight: Flight;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.flight = data['flight'];
    })

    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

  decide(decision: boolean): void {
    this.showWarning = false;
    this.sender.next(decision);
    this.sender.complete();
  }

  canExit(): Observable<boolean> {
    this.showWarning = true;

    return Observable.create((sender: Observer<boolean>) => {
      this.sender = sender;
    });

  }


}
