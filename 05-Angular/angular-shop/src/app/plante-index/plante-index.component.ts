import { Component, OnInit } from '@angular/core';
import { PlantesService } from '../plantes.service';
import {Plante} from '../plante';
import {Router} from '@angular/router';


@Component({
  selector: 'app-plante-index',
  templateUrl: './plante-index.component.html',
  styleUrls: ['./plante-index.component.css']
})
export class PlanteIndexComponent implements OnInit {
  plantes: Plante[];

  constructor(
    private plantesService: PlantesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.plantes = this.plantesService.plantes;
  }

  goToDetail(selectedPlante: Plante) {
    this.router.navigate(['/plante', selectedPlante.id]);
  }
}
