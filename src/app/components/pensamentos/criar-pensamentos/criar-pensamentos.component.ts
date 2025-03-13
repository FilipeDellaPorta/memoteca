import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
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
export class CriarPensamentosComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: [''],
      modelo: ['modelo1'],
    });
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
