import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBrandsComponent } from './create-brands.component';

describe('CreateBrandsComponent', () => {
  let component: CreateBrandsComponent;
  let fixture: ComponentFixture<CreateBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
