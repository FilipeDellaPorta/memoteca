import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoCardComponent } from '../pensamento-card/pensamento-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [RouterLink, PensamentoCardComponent, CommonModule],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css',
})
export class ListarPensamentosComponent {
  listaPensamentos = [];
}
