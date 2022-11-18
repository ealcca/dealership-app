import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  car = {
    brand:"Ford",
    model:2000,
    year:2021,
    color:"blue",
    price:2200000,
    image:"assets/fordk.jpg"
  }

}
