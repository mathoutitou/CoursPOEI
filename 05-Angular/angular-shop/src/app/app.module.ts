import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PlanteThumbnailComponent } from './plante-thumbnail/plante-thumbnail.component';
import { PlanteDetailComponent } from './plante-detail/plante-detail.component';
import { PlanteCreateComponent } from './plante-create/plante-create.component';
import {LoggerService} from './logger.service';
import {configFactory, SERVER_URL, SERVER_URL_TOKEN} from './app.config';
import {HttpClientModule} from '@angular/common/http';

const COUCOU = new InjectionToken('coucou');
const LOGGER_ALIAS = new InjectionToken('alias vers le logger');
const SECONDE_CONFIG   = new InjectionToken('une deuxième config');

@NgModule({
  declarations: [
    AppComponent,
    PlanteThumbnailComponent,
    PlanteDetailComponent,
    PlanteCreateComponent
  ],
  imports: [ // gestion des fonctionnalités du framework disponibles dans l'application
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoggerService,
    { provide: LoggerService, useClass: LoggerService },
    { provide: SERVER_URL_TOKEN, useValue: SERVER_URL },
    {provide: COUCOU, useValue: 'coucou les gens'},
    {provide: LOGGER_ALIAS, useExisting: LoggerService },
    {provide: SECONDE_CONFIG, useFactory: configFactory, deps: ['Pierre'] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
