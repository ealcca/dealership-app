import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car-list/car';

const URL = "http://localhost:3000/cars";
  
@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(URL);
  }
  
}
