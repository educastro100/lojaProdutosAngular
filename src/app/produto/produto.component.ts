import { Component, OnInit} from '@angular/core';
import { Produto } from './produto';
import { PRODUTOS } from '../listaProdutos';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  
  // Declara a variável que guarda a lista de produtos
  listaProdutos : Produto[] = [];

  // Recebe o produto selecionado
  // produtoSelecionado : Produto = { name: '', price : 0, qtde: 0};
  
  // onSelect(produto: Produto): void {
  //   this.produtoSelecionado = produto;
  // }

  // Método construtor
  constructor(private produtoService: ProdutoService) { }

  // Método que chama o service responsável por pegar os produtos
  getProdutos(): void{
    this.listaProdutos = this.produtoService.getProdutos();
  }

  ngOnInit(): void {
    this.getProdutos();
  }

}
