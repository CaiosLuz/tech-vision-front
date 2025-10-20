import { Component } from '@angular/core';
import { MenuSuperior } from '../menu-superior/menu-superior';
import { Footer } from '../footer/footer';
import { DetalheAnexarReceita } from '../detalhe-anexar-receita/detalhe-anexar-receita';

@Component({
  selector: 'app-anexar-receita',
  imports: [MenuSuperior, Footer, DetalheAnexarReceita],
  templateUrl: './anexar-receita.html',
  styleUrl: './anexar-receita.css'
})
export class AnexarReceita {

}
