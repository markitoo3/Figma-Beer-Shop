import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCartPageComponent } from './beer-cart-page.component';

describe('BeerCartPageComponent', () => {
  let component: BeerCartPageComponent;
  let fixture: ComponentFixture<BeerCartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerCartPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
