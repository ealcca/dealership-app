import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BrandDataService } from '../brand-data.service';
import { Brand } from '../brand-list/brand';

@Component({
  selector: 'create-brands',
  templateUrl: './create-brands.component.html',
  styleUrls: ['./create-brands.component.scss']
})
export class CreateBrandsComponent {

  brandForm = new FormGroup({
    //id: new FormControl(''),
    trademark: new FormControl(''),
  })

  constructor(private brandsDataService:BrandDataService) { }

  createBrand() {
     this.brandsDataService.create(this.brandForm.value);
  }
}

