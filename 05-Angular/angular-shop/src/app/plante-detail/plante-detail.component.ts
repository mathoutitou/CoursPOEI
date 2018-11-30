import {Component, Input, OnInit} from '@angular/core';
import {Plante} from '../plante';
import {ActivatedRoute} from '@angular/router';
import {PlantesService} from '../plantes.service';


@Component({
  selector: 'app-plante-detail',
  templateUrl: './plante-detail.component.html',
  styleUrls: ['./plante-detail.component.css']
})
export class PlanteDetailComponent implements OnInit {

  plante: Plante;

  constructor(
    private  route: ActivatedRoute,
    private plantesServices: PlantesService,
    // private name: Name
  ) { }

  ngOnInit() {
    // accès aux paramètres de route en tant qu'observable
    // à chaque changement, notre fonction fléchée est appelée
    this.route.paramMap.subscribe(
      params => {
        // parmi les paramètres, on va chercher celui qui s'appelle "id"
        // et on le converti en valeur numérique
        const id = +params.get('id');
        // on demande ensuite à notre service qui gère l'ensemble des formations
        // de nous extraire celui qui possède le bon "id"
        this.plante = this.plantesServices.get(id);
        // this.name.setTitle(this.plante.name);
      }
    );
  }

}
