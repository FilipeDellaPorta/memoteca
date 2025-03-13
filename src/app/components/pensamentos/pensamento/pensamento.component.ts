import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pensamento } from '../Pensamento.js';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css',
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: '0',
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false,
  };

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito === false) {
      return 'inativo';
    } else {
      return 'ativo';
    }
  }
}
