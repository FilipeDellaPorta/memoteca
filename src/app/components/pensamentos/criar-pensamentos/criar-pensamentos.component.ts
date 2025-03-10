import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css',
})
export class CriarPensamentosComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  criarPensamento() {
    alert('Novo pensamento criado.');
  }
}
