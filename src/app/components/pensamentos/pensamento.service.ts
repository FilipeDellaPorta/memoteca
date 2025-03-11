import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './Pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  public api = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  listarPensamentos(): Observable<Pensamento[]> {
    console.log('Chamando o serviço para listar pensamentos...');

    return this.http.get<Pensamento[]>(this.api);
  }
}
