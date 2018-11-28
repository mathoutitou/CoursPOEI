import {Component, Input, OnInit} from '@angular/core';
import {Plante} from '../plante';

@Component({
  selector: 'app-plante-detail',
  templateUrl: './plante-detail.component.html',
  styleUrls: ['./plante-detail.component.css']
})
export class PlanteDetailComponent implements OnInit {
  @Input()
  plante: Plante;


  constructor() { }

  ngOnInit() {
  }

}
