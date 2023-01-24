import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class PassengerLibModule {
  static forRoot(): ModuleWithProviders<PassengerLibModule> {
    return {
      ngModule: PassengerLibModule,
      providers: []
    }
  }
}
