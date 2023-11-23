import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Brand } from './brand-list/brand';
import {environment} from '../environments/environment';

const URL = environment.apiUrl + 'brands';

@Injectable({
  providedIn: 'root'
})
export class BrandDataService {

  private _brands : Brand[] = [];
  private _brandsSubjects : BehaviorSubject<Brand[]> = new BehaviorSubject(this._brands);
  public brands: Observable<Brand[]> = this._brandsSubjects.asObservable(); 

  constructor(private http: HttpClient) { 
    this.http.get<Brand[]>(URL).subscribe(data => {
      this._brands.push(...data);
    });
  }
  
  create(brand:any):void {
    this.http.post<Brand>(URL, brand).subscribe({
      error: error => {
        console.error('CHECKK ERROR',error);
      },
      next: data => {
        this._brands.push(data);
      }
    });
  }  
}
