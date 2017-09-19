import { Injectable } from '@angular/core';
import { Convidado } from './models/convidado';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConvidadoService {

  urlConvidados = 'http://localhost:8080/rs/convidados';

  constructor(private http: Http) {
  }

  listar(): Promise<any> {
    return this.http.get(this.urlConvidados)
      .toPromise()
      .then(response => response.json());
  }

}
