import { Component, OnInit} from '@angular/core';
import { Produto } from './produto';
import { PRODUTOS } from '../listaProdutos';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  // produto: Produto = {
  //   name: "Notebook",
  //   price: 3000,
  //   qtde: 5
  // };

  listaProdutos = PRODUTOS;

  constructor() { }

  ngOnInit(): void {
  }

}