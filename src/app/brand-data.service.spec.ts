import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { BrandDataService } from './brand-data.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('BrandDataService', () => {
  let service: BrandDataService;
  //const httpClientSpy = jasmine.createSpyObj('HttpClient',['get','post']);
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      //providers: [{ provide: HttpClient,useValue: httpClientSpy}]
      //imports: [HttpClientTestingModule],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BrandDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  //httpClientSpy.post.and.returnValue(of({ status:200, data:{}}));
  //httpClientSpy.get.and.returnValue(of({ status:200, data:{}}));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
