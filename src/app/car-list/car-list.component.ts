import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';
import { CarDataService } from '../car-data.service';
import { Car } from './car';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  cars : Car[] = [];
  
  /* [{
    brand:"ford",
    model:2000,
    year:2021,
    color:"blue",
    price:2000,
    image:"assets/fordk.jpg"
  },
  {
    brand:"nissan",
    model:2000,
    year:2021,
    color:"blue",
    price:2500,
    image:"assets/fordk.jpg"
  },
  {
    brand:"toyota",
    model:2000,
    year:2021,
    color:"blue",
    price:3000,
    image:"assets/fordk.jpg"
  }] */
  constructor (private carsDataService:CarDataService) {

  }
  ngOnInit():void{
    this.carsDataService.getAll().subscribe( cars => this.cars = cars);
  }

}
