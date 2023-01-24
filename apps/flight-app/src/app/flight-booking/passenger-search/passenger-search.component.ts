import {Component, ViewEncapsulation} from '@angular/core';
import {Passenger, PassengerService} from '@flight-workspace/passenger-lib';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PassengerSearchComponent {
  passengers: Observable<Passenger[]> = this.passengerService.findAll();

  constructor(private passengerService: PassengerService) {
  }

}
