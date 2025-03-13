import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pensamento } from '../Pensamento.js';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensamento-card',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './pensamento-card.component.html',
  styleUrl: './pensamento-card.component.css',
})
export class PensamentoCardComponent {
  @Input() pensamento: Pensamento = {
    id: '0',
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
  };

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
