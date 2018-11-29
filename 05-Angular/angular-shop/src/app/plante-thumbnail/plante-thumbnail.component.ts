import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Plante} from '../plante';

@Component({
  selector: 'app-plante-thumbnail',
  templateUrl: './plante-thumbnail.component.html',
  styleUrls: ['./plante-thumbnail.component.css']
})
export class PlanteThumbnailComponent implements OnInit {
  @Input() plante: Plante;
  @Input() isActive: boolean;

  @Output()
  planteSelected = new EventEmitter<Plante>();

  constructor() { }

  ngOnInit() {
  }

  select(): void {
    this.planteSelected.emit(this.plante);
  }

}
