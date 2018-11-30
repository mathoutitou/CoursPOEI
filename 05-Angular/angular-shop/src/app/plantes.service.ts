import { Injectable } from '@angular/core';
import {Plante} from './plante';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantesService {
  plantesObservable: Observable<Array<Plante>>;
  plantes: Array<Plante> = [];

  // récupération du service client HTTP via l'injecteur de dépendance
  constructor(private logger: LoggerService, private http: HttpClient) {

    // envoi d'une requête HTTP GET vers la ressource assets/data.json
    this.http.get('assets/data.json')
      // traitement de la réponse en cas de succès
      .subscribe( (response: Plante[]) => {
        this.logger.log(response);
        for (const plante of response) {
          this.plantes.push(plante);
        }
      },
        // en cas d'échec :
          reason => {
        console.log('zut zut encore raté', reason);
      });
  }
  get(id: number) {
    return this.plantes.find(elt => elt.id === id);
  }
}
