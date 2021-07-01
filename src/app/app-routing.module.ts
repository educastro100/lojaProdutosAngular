import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto/produto.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';

const routes: Routes = [
  {path: "produtos" , component: ProdutoComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "", redirectTo: "/dashboard" , pathMatch: "full"},
  {path: "detalhes/:id", component : ProdutoDetalhesComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
