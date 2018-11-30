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
import {RouterModule} from '@angular/router';
import { PlanteIndexComponent } from './plante-index/plante-index.component';
import { MenuComponent } from './menu/menu.component';

const COUCOU = new InjectionToken('coucou');
const LOGGER_ALIAS = new InjectionToken('alias vers le logger');
const SECONDE_CONFIG   = new InjectionToken('une deuxième config');

@NgModule({
  declarations: [
    AppComponent,
    PlanteThumbnailComponent,
    PlanteDetailComponent,
    PlanteCreateComponent,
    PlanteIndexComponent,
    MenuComponent
  ],
  imports: [ // gestion des fonctionnalités du framework disponibles dans l'application
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // chargement des configurations de roots
    RouterModule.forRoot([
      { path: 'plante', component: PlanteIndexComponent },
      { path: 'plante/:id', component: PlanteDetailComponent },
      { path: 'create', component: PlanteCreateComponent },
      { path: '', redirectTo: 'plante', pathMatch: 'full' },
    ])
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
