import {Injectable} from '@angular/core';
import {LogFormatterService} from '@flight-workspace/logger-lib';

@Injectable()
export class CustomLogFormatterService extends LogFormatterService {
  format(value: string): string {
    return `[FLIGHT-APP]: ${value}`;
  }
}
