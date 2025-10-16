import { Component } from '@angular/core';
import { MenuSuperior } from '../menu-superior/menu-superior';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuSuperior],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
