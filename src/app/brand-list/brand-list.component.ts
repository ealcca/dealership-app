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
  
  /* [{  
    id: 1,
    brand:"toyota"
  },
  {  
    id: 2,
    brand:"ford"
  },
  {  
    id: 3,
    brand:"chevrolet"
  }] */
  constructor(private brandsDataService:BrandDataService) { }

  ngOnInit():void {
    this.brandsDataService.getAll().subscribe(brands => this.brands = brands);
  }
}
