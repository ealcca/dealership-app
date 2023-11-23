import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from './car-list/car';

const URL = "http://localhost:3000/cars";
  
@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  private _cars : Car[] = [];
  private _carsSubjects : BehaviorSubject<Car[]> = new BehaviorSubject(this._cars);
  public cars: Observable<Car[]> = this._carsSubjects.asObservable(); 

  constructor(private http: HttpClient) { 
    this.http.get<Car[]>(URL).subscribe(data => {
      this._cars.push(...data);
    });
  }

  create(car:any):void {
    this.http.post<Car>(URL, car).subscribe({
      error: error => {
        console.error('CHECKK ERROR',error);
      },
      next: data => {
        this._cars.push(data);
      }
    });
  }
}
