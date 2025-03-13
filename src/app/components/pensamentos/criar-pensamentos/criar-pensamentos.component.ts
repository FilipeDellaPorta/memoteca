import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from '../Pensamento.js';
import { PensamentoService } from '../pensamento.service.js';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css',
})
export class CriarPensamentosComponent {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(private service: PensamentoService, private router: Router) {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
