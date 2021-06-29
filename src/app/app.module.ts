import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';



//Adiciona importaçãop da biblioteca de formulários
import {FormsModule} from '@angular/forms';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ProdutoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
