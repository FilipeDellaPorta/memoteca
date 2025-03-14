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

  listar(pagina: number, filtro: string): Observable<Pensamento[]> {
    console.log('Chamando o serviço para listar pensamentos...');
    const itensPorPagina = 6;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);

    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }
    return this.http.get<Pensamento[]>(this.api, { params });
  }

  listarPensamentosFavoritos(
    pagina: number,
    filtro: string
  ): Observable<Pensamento[]> {
    const itensPorPagina = 6;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina)
      .set('favorito', true);

    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }
    return this.http.get<Pensamento[]>(this.api, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.api, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.api}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito;
    return this.editar(pensamento);
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
