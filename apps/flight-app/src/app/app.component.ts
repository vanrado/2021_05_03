import {Component, OnInit} from '@angular/core';
import {LoggerService} from '@flight-workspace/logger-lib';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loggerService: LoggerService) {
  }

  ngOnInit(): void {
    this.loggerService.log('this is log');
    this.loggerService.debug('this is debug log');
  }
}
