import { Component } from '@angular/core';
import { BrandDataService } from '../brand-data.service';
import { Brand } from '../brand-list/brand';

@Component({
  selector: 'create-brands',
  templateUrl: './create-brands.component.html',
  styleUrls: ['./create-brands.component.scss']
})
export class CreateBrandsComponent {

  constructor(private brandsDataService:BrandDataService) { }

  createBrand() {
    let brand : Brand = {
      'id':5,
      'brand':'ferra'
    }
    this.brandsDataService.create(brand);
  }
}

