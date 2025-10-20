import { Component } from '@angular/core';
import { MenuSuperior } from '../menu-superior/menu-superior';
import { Footer } from '../footer/footer';
import { SelecionarEspessura } from '../selecionar-espessura/selecionar-espessura';

@Component({
  selector: 'app-tipo-espessura',
  imports: [MenuSuperior, Footer, SelecionarEspessura],
  templateUrl: './tipo-espessura.html',
  styleUrls: ['./tipo-espessura.css']
})
export class TipoEspessura {

}
