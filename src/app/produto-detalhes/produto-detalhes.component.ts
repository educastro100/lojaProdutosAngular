import { Component, OnInit, Input} from '@angular/core';
import { Produto } from '../produto/produto';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ProdutoService } from "../produto.service";

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  // Input espera um valor para a variável produto quando eu instanciar o componente (Chama no html)
  produto: Produto = {
    name: '',
    price: 0,
    qtde: 0
  };

  constructor(
        private rota : ActivatedRoute,
    private database : ProdutoService,
    private local : Location
  ) { }

  ngOnInit(): void {
    this.getProduto();
  }

  voltar() : void {
    this.local.back();
    }
    

  getProduto() : void {

    let id = this.rota.snapshot.paramMap.get("id");

    let indice : number = 0; 
    if (typeof(id) == "string"){
      indice = parseInt(id);  
    }
  
    this.produto = this.database.getProdutos()[indice];

  }

}
