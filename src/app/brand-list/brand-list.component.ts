import { Component } from '@angular/core';
import { BrandDataService } from '../brand-data.service';
import { Brand } from './brand';

@Component({
  selector: 'brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent {

  brands : Brand[] = [];
  
  constructor(private brandsDataService:BrandDataService) { }

  ngOnInit():void {
    this.brandsDataService.brands.subscribe(brands => this.brands = brands);
  }
}
