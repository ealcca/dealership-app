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
  
  create(car:any):void {
    this.http.post<any>(URL, car).subscribe({
      error: error => {
        console.error('CHECKK ERROR',error);
      },
      next: data => {
        console.log(data);
      }
    });
  }

}
