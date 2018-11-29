import { Injectable } from '@angular/core';
import {AppModule} from './app.module';

@Injectable({
  providedIn: AppModule
})
export class LoggerService {

  log (message: any): void {
    console.log(message);
  }
}
