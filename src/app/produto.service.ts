// Esse arquivo é como se fosse uma model

import { Injectable } from '@angular/core';
import { Produto } from './produto/produto';
import { PRODUTOS } from './listaProdutos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // Pega os registros que estão na lista de produtos
  getProdutos():Produto[]{
    return PRODUTOS;
  }

  constructor() { }
}
