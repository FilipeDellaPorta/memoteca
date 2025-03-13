import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { BotaoCarregarMaisComponent } from './botao-carregar-mais/botao-carregar-mais.component';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    PensamentoComponent,
    BotaoCarregarMaisComponent,
  ],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css',
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  maisPensamentos: boolean = true;

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual)
      .subscribe((listaDePensamentos: Pensamento[]) => {
        this.listaPensamentos = listaDePensamentos;
      });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      if (!listaPensamentos.length) {
        this.maisPensamentos = false;
      }
    });
  }
}
