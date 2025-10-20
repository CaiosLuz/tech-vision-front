import { Component } from '@angular/core';
import { MenuSuperior } from '../menu-superior/menu-superior';
import { Footer } from '../footer/footer';
import { SelecionarLente } from '../selecionar-lente/selecionar-lente';

@Component({
  selector: 'app-tipo-lente',
  imports: [MenuSuperior, Footer, SelecionarLente],
  templateUrl: './tipo-lente.html',
  styleUrl: './tipo-lente.css'
})
export class TipoLente {

}
