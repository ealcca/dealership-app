import { TestBed } from '@angular/core/testing';

import { CarDataService } from './car-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CarDataService', () => {
  let service: CarDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CarDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
