import {Component, Inject} from '@angular/core';
import { Plante } from './plante';
import {PlantesService} from './plantes.service';
import {LoggerService} from './logger.service';
import {SERVER_URL_TOKEN} from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Plantastore';
  plantes: Plante[] = []; // [] pour signifier que c'est un tableau
  currentPlante: Plante; // permet d'avoir un produit courant

  constructor(
    plantesService: PlantesService,
    private logger: LoggerService,
    @Inject(SERVER_URL_TOKEN) serverUrl: string
  ) {
    this.plantes = plantesService.plantes;
//     // Mettre une plante par défault
    this.currentPlante = this.plantes[0];
  }


  add(plante: Plante): void {
    this.logger.log('new plante');
    this.plantes.push(plante);
    this.currentPlante = plante;
  }

  remove(plante: Plante) {
    this.logger.log('cancel plante');
    const pos = this.plantes.indexOf(plante);
    this.plantes.splice(pos, 1);
  }

  // Définir quel est l'objet courant
  setCurrent(plante: Plante): void {
    this.currentPlante = plante;
  }

}

