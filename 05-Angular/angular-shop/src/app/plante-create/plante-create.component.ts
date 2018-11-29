import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Plante} from '../plante';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-plante-create',
  templateUrl: './plante-create.component.html',
  styleUrls: ['./plante-create.component.css']
})
export class PlanteCreateComponent implements OnInit {
  newPlante = new Plante();

  @Output()
  planteCreated = new EventEmitter<Plante>();
  constructor() { }
  ngOnInit() {
  }
  create(form: NgForm) {
    this.newPlante.img = this.newPlante.img.substr(12);
    this.planteCreated.emit(this.newPlante);
    this.newPlante = new Plante();
    form.reset();
  }

}
