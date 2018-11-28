import { Component } from '@angular/core';
import { Plante } from './plante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Plantastore';
  plantes: Plante[] = []; // [] pour signifier que c'est un tableau
  currentPlante: Plante; // permet d'avoir un produit courant

  constructor() {
    this.plantes.push(new Plante());
    this.plantes[0].name = 'Aloe Vera';
    this.plantes[0].img = 'aloe-vera.png';
    this.plantes[0].description = 'Connue pour ses vertus médicinales et cosmétiques.';
    this.plantes[0].price = 20;

    this.plantes.push(new Plante());
    this.plantes[1].name = 'Bananier';
    this.plantes[1].img = 'bananier.png';
    this.plantes[1].description = 'Dans des conditions idéales, il fera de toutes petites bananes, pas très bonnes.';
    this.plantes[1].price = 35;

    this.plantes.push(new Plante());
    this.plantes[2].name = 'Succulente';
    this.plantes[2].img = 'succulente.png';
    this.plantes[2].description = 'Très appréciée pour son feuillage en forme de fleur.';
    this.plantes[2].price = 30;

    this.plantes.push(new Plante());
    this.plantes[3].name = 'Yucca';
    this.plantes[3].img = 'yucca.png';
    this.plantes[3].description = 'Facile d\'entretien, elle est originaire d\'Amérique Centrale.';
    this.plantes[3].price = 30;
  }
  // Définir quel est l'objet courant
  setCurrent(plante: Plante): void {
    this.currentPlante = plante;
  }

}

