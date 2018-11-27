import { Component } from '@angular/core';
import { Plante } from './plante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Plantastore';
  plante: Plante ;

  constructor() {
    this.plante = new Plante();
    this.plante.name = 'Aloe Vera';
    this.plante.img = '<img src="img/aloe-vera.png" alt="aloe">';
    this.plante.description = 'LALALALALA Connue pour ses vertus médicinales et cosmétiques.';
    this.plante.price = 20;
  }
}
