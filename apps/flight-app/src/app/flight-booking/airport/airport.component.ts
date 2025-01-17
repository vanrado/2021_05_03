import { Component, OnInit } from '@angular/core';
import {AirportService} from '@flight-workspace/flight-lib';

@Component({
  selector: 'flight-workspace-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent {
  airports = this.airportService.findAll();

  constructor(private airportService: AirportService) { }

}
