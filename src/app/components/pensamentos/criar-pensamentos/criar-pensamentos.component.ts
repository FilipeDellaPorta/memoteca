import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [],
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css',
})
export class CriarPensamentosComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };
}
