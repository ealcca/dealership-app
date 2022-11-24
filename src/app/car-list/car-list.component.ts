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
  
  constructor (private carsDataService:CarDataService) { }
  
  ngOnInit():void{
    this.carsDataService.cars.subscribe( cars => this.cars = cars);
  }

}
