import { Component } from '@angular/core';
import { MenuSuperior } from '../menu-superior/menu-superior';
import { Slider } from '../slider/slider';
import { InfoOfertas } from '../info-ofertas/info-ofertas';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuSuperior, Slider, InfoOfertas],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
