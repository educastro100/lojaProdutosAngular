import { Component, OnInit, Input} from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  // Input espera um valor para a variável produto quando eu instanciar o componente (Chama no html)
  @Input() produto: Produto = {
    name: '',
    price: 0,
    qtde: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
