import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from './brand-list/brand';

const URL = "http://localhost:3000/brands";

@Injectable({
  providedIn: 'root'
})
export class BrandDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(URL);
  }

  create(brand:Brand):void {
    this.http.post<Brand>(URL, brand).subscribe({
      error: error => {
        console.error('fgd',error);
      },
      next: data => {
        console.log(data);
      }
    });
  }
  
}
