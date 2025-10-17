import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class Slider {
  images = [944, 1011, 984].map((n) => `images/slide1.png`);
}
