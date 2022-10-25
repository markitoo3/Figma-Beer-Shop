import { Injectable, Input } from '@angular/core';
import { Beer } from '../models/Beer-model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  @Input() beer?: Beer;
  filteredBeers: Beer[] = [];

  /* filterBeers: any = {
    price: [
      {name: 'price1', checked: false},
      {name: 'price2', checked: false},
      {name: 'price3', checked: false},
      {name: 'price4', checked: false},
    ],
    content: [
      {name: 'content1', checked: false},
      {name: 'content2', checked: false},
      {name: 'content3', checked: false},
      {name: 'content4', checked: false},
    ]
  }



  filterBeersByPrice(beer: any, price: any) {
    let beerPrice = beer.price;
    let price1 = price.price1;
    let price2 = price.price2;
    let price3 = price.price3;
    let price4 = price.price4;
    if (price1 && beerPrice <= 5) {
      return true;
    } else if (price2 && beerPrice > 5 && beerPrice <= 10) {
      return true;
    } else if (price3 && beerPrice > 10 && beerPrice <= 15) {
      return true;
    } else if (price4 && beerPrice > 15) {
      return true;
    } else {
      return false;
    }
  }


  getFilteredBeers() {
    this.filterBeers = this.beer!.filter((beer: any) => {
      return this.filterBeersByPrice(beer, this.filterBeers.price);
    }
    )

  } */

  constructor() { }
}
