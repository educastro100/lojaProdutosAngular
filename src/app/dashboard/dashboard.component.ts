import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private servico: ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    let lista = this.servico.getProdutos().slice(0);
    lista.sort((a,b) => (a.price > b.price) ? 1 : -1);
    this.produtos = lista.splice(0,3);
  }

}
