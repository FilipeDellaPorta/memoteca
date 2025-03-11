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
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus justo semper odio rutrum consequat. Suspendisse eros magna, blandit id magna id, volutpat dignissim libero. In vitae ipsum risus. Donec pharetra pharetra est ac tempor. Nullam lacus nulla, tincidunt eu ex eu, imperdiet ultrices ipsum. Nam gravida, nisl quis rhoncus commodo, ante neque convallis eros, sed euismod tellus neque in arcu. Ut commodo volutpat elementum. Donec consequat in nunc nec blandit. Donec odio enim, eleifend sit amet odio at, accumsan pulvinar libero.',
      autoria: 'Lorem Ipsum',
      modelo: 'modelo3',
    },
  ];
}
