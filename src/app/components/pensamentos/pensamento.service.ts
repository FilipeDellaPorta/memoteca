import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './Pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly api = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Pensamento[]>(this.api);
  }
}
