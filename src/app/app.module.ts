import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarsComponent } from './cars/cars.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandsComponent } from './brands/brands.component';
import { CreateBrandsComponent } from './create-brands/create-brands.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCarsComponent } from './create-cars/create-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarsComponent,
    AboutUsComponent,
    BrandListComponent,
    BrandsComponent,
    CreateBrandsComponent,
    CreateCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
