import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailsPageComponent } from './beer-details-page.component';

describe('BeerDetalsPageComponent', () => {
  let component: BeerDetailsPageComponent;
  let fixture: ComponentFixture<BeerDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
