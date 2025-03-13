import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';
import { PensamentoComponent } from "../pensamento/pensamento.component";

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [RouterLink, CommonModule, PensamentoComponent],
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
