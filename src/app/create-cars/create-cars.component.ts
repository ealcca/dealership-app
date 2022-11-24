import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BrandDataService } from '../brand-data.service';
import { Brand } from '../brand-list/brand';
import { CarDataService } from '../car-data.service';
import { Car } from '../car-list/car';

@Component({
  selector: 'create-cars',
  templateUrl: './create-cars.component.html',
  styleUrls: ['./create-cars.component.scss']
})
export class CreateCarsComponent {

  brands : Brand[] = [];

  carForm = new FormGroup({
    brandname: new FormControl(''),
    brandId: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    color: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl('asset/fordk.jpg'),
    
  }) 

  constructor(private carsDataService:CarDataService, private brandsDataService:BrandDataService) { }

  ngOnInit():void{
    this.brandsDataService.getAll().subscribe( brands => this.brands = brands);
  }

  createCar() {
    /* let car : Car = {
      'brandname':'zafari',
      'model':'fere',
      'year':2121,
      'color':'red',
      'price':2000,
      'image':'assets/fordk.jpg',
    }
  this.carsDataService.create(car); */
 
  //console.log(this.carForm.value);

  this.carsDataService.create(this.carForm.value);
  }
}

