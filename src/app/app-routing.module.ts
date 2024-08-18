import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartamentosComponent } from './components/apartamentos/apartamentos.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';
import { VeiculoFormComponent } from './components/veiculo-form/veiculo-form.component';
import { ApartamentoFormComponent } from './components/apartamento-form/apartamento-form.component';

const routes: Routes = [
  {
    path: 'apartamentos',
    component: ApartamentosComponent,
  },
  {
    path: 'apartamentos/form',
    component: ApartamentoFormComponent,
  },
  {
    path: 'veiculos',
    component: VeiculosComponent,
  },
  {
    path: 'veiculos/form',
    component: VeiculoFormComponent,
  },
  { path: '', redirectTo: '/apartamentos', pathMatch: 'full' }, // Redirecionamento padrão
  { path: '**', redirectTo: '/apartamentos' }, // Rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
