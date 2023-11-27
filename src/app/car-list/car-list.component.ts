import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';
import { CarDataService } from '../car-data.service';
import { Car } from './car';
//import { Brand} from './brand';
import { BrandDataService } from '../brand-data.service';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent {
  cars : Car[] = [];
 // brands: Brand[] = [];

  constructor (private carsDataService:CarDataService, private brandDataService:BrandDataService) { }
  
  ngOnInit():void{
    this.carsDataService.cars.subscribe( cars => this.cars = cars);
  }

}
