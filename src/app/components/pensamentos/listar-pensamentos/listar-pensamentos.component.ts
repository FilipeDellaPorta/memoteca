import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoCardComponent } from '../pensamento-card/pensamento-card.component';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [RouterLink, PensamentoCardComponent, CommonModule],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css',
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaDePensamentos: Pensamento[]) => {
      this.listaPensamentos = listaDePensamentos;
    });
  }
}
