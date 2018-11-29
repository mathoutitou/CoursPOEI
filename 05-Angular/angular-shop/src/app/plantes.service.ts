import { Injectable } from '@angular/core';
import {Plante} from './plante';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantesService {
  plantes: Array<Plante> = [] ;

  // récupération du service client HTTP via l'injecteur de dépendance
  constructor(private logger: LoggerService, private http: HttpClient) {

    // envoi d'une requête HTTP GET vers la ressource assets/data.json
    this.http.get('assets/data.json').toPromise()
      // traitement de la réponse en cas de succès
      .then((response: Plante[]) => {
        this.logger.log(response);
        for (const plante of response) {
          this.plantes.push(plante);
        }
      })
      .catch(reason => {
        console.log('zut zut encore raté', reason);
      });
  }
}
