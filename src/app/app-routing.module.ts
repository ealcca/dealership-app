import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrandsComponent } from './brands/brands.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: '',redirectTo: 'cars', pathMatch: 'full'},
  { path: 'cars', component:CarsComponent},
  { path: 'brands', component:BrandsComponent},
  { path: 'about-us',component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
