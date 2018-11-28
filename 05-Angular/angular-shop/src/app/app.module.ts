import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanteDetailComponent } from './plante-detail/plante-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanteDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
