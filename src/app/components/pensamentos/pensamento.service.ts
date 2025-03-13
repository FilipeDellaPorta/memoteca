import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './Pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  public api = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  // #sem usar o HttpParams
  // listar(pagina: number): Observable<Pensamento[]> {
  //   console.log('Chamando o serviço para listar pensamentos...');
  //   return this.http.get<Pensamento[]>(
  //     `${this.api}?_page=${pagina}&_limit=${6}`
  //   );
  // }

  listar(pagina: number): Observable<Pensamento[]> {
    console.log('Chamando o serviço para listar pensamentos...');
    const itensPorPagina = 6;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);
    return this.http.get<Pensamento[]>(this.api, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.api, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.api}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.api}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: string): Observable<Pensamento> {
    const url = `${this.api}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
