import { Component } from '@angular/core';
import { MenuSuperior } from '../menu-superior/menu-superior';
import { Slider } from '../slider/slider';
import { InfoOfertas } from '../info-ofertas/info-ofertas';
import { Produtos } from '../produtos/produtos';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuSuperior, Slider, InfoOfertas, Produtos, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
