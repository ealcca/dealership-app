import { Component } from '@angular/core';

@Component({
  selector: 'brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent {

  brand = {  
    id: 1,
    brand:"toyota"
  }
}
