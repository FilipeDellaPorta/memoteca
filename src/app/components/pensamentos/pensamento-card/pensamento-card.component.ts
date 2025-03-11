import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento-card',
  standalone: true,
  imports: [],
  templateUrl: './pensamento-card.component.html',
  styleUrl: './pensamento-card.component.css',
})
export class PensamentoCardComponent {
  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
  };
}
