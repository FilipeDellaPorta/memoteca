import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento-card',
  standalone: true,
  imports: [],
  templateUrl: './pensamento-card.component.html',
  styleUrl: './pensamento-card.component.css',
})
export class PensamentoCardComponent {
  pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
  };
}
