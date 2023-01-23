import {LogFormatterService} from './log-formatter.service';

export class DefaultLogFormatterService extends LogFormatterService {
  format(value: string): string {
    return value;
  }
}
