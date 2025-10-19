import { Component } from '@angular/core';
import { MenuSuperior } from '../menu-superior/menu-superior';
import { Slider } from '../slider/slider';
import { InfoOfertas } from '../info-ofertas/info-ofertas';
import { Produtos } from '../produtos/produtos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuSuperior, Slider, InfoOfertas, Produtos],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
