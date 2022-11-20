import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';
import { Car } from './car';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  car : Car[] = [{
    brand:"Ford",
    model:2000,
    year:2021,
    color:"blue",
    price:2200000,
    image:"assets/fordk.jpg"
  },
  {
    brand:"Nissan",
    model:2000,
    year:2021,
    color:"blue",
    price:2200000,
    image:"assets/fordk.jpg"
  },
  {
    brand:"TOYOTA",
    model:2000,
    year:2021,
    color:"blue",
    price:2200000,
    image:"assets/fordk.jpg"
  }]

}
