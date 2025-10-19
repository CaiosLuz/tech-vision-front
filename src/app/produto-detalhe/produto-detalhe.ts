import { Component } from '@angular/core';
import { MenuSuperior } from '../menu-superior/menu-superior';
import { Footer } from '../footer/footer';
import { InfoProduto } from '../info-produto/info-produto';

@Component({
  selector: 'app-produto-detalhe',
  imports: [MenuSuperior, Footer, InfoProduto],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe {

}
