import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-produto',
  imports: [CommonModule],
  templateUrl: './info-produto.html',
  styleUrl: './info-produto.css'
})
export class InfoProduto {
  imagens = [
    'images/detalhe-produto/produto-principal.png',
    'images/detalhe-produto/produto-principal.png',
    'images/detalhe-produto/produto-principal.png'
  ];

  imagemPrincipal = this.imagens[0];

  trocarImagem(novaImagem: string) {
    this.imagemPrincipal = novaImagem;
  }
}
