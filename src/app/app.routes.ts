import { Routes } from '@angular/router';
import { CriarPensamentosComponent } from './components/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full',
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentosComponent,
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent,
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent,
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent,
  },
];
