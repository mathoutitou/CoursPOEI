import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Plante} from '../plante';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {PlayerBuilder} from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'app-plante-create',
  templateUrl: './plante-create.component.html',
  styleUrls: ['./plante-create.component.css']
})
export class PlanteCreateComponent implements OnInit {

  newPlante = new Plante();

  @Output()
  planteCreated = new EventEmitter<Plante>();

  @Output()
  planteCanceled = new EventEmitter<Plante>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  create(form: NgForm) {
    // capture de la nouvelle formation le temps du traitement côté serveur
    const pendingPlante = this.newPlante;
    // envoi en post sur l'url "plante" la donnée this.newPlante
    this.http.post('plante', this.newPlante)
      .subscribe(
        response => {console.log(response); },
        reason => {this.cancel(reason); }
        );
    this.planteCreated.emit(this.newPlante);
    this.newPlante = new Plante();
    form.reset();
  }

  private cancel(pendingPlante: Plante) {
    this.planteCanceled.emit(pendingPlante);
    this.newPlante = pendingPlante;
  }
}
