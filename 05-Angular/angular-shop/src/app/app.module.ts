import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PlanteThumbnailComponent } from './plante-thumbnail/plante-thumbnail.component';
import { PlanteDetailComponent } from './plante-detail/plante-detail.component';
import { PlanteCreateComponent } from './plante-create/plante-create.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanteThumbnailComponent,
    PlanteDetailComponent,
    PlanteCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
