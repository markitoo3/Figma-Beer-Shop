import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Beer } from '../models/Beer-model';

const BEERS_URL = 'https://api.punkapi.com/v2/beers';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  beers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([]);
  favoriteBeers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([]);


  constructor(private Http: HttpClient) { }

  pageNumber: number = 1;



  getBeer(id: string): Observable<Beer[]> {
    return this.Http.get<Beer[]>(`${BEERS_URL}?ids=${id}`).pipe(
      map((beers: Beer[]) => {
        return beers.map((beer: Beer) => {
          let customBeers = this.customPriceBeers(beer);
          let beersObject = {...beer, customBeers};
          return beersObject
        })
      })
  )}

  getAllBeers(): Observable<Beer[]> {
    return this.Http.get<Beer[]>(`${BEERS_URL}?page=${this.pageNumber}&per_page=27`).pipe(
      map((beers: Beer[]) => {
        return beers.map((beer: Beer) => {
          let customBeers = this.customPriceBeers(beer);
          let beersObject = {...beer, customBeers};
          return beersObject
        })
      })
    )
  }

  addToFavoriteBeers(beer: Beer) {
    let favoriteBeers = this.favoriteBeers$.getValue();
    let beerIndex = favoriteBeers.findIndex((b: Beer) => b.id === beer.id);
    !beerIndex ? favoriteBeers.push(beer) : null
    this.favoriteBeers$.next(favoriteBeers);
  }

  removeFromFavoriteBeers(beer: Beer) {
    let favoriteBeers = this.favoriteBeers$.getValue();
    let beerIndex = favoriteBeers.findIndex((b: Beer) => b.id === beer.id);
    beerIndex ? favoriteBeers.splice(beerIndex, 1) : null
    this.favoriteBeers$.next(favoriteBeers);
  }

  customPriceBeers(beer: Beer) {
    beer.price = Math.round(beer.ibu / 10);
    beer.isFavorite = false;
  }

  /* addToCart(beer: Beer) {
    let cartBeers = this.beers$.getValue();
    let beerIndex = cartBeers.findIndex((b: Beer) => b.id === beer.id);
    !beerIndex ? cartBeers.push(beer) : null
    this.beers$.next(cartBeers);
  } */

  /* removeFromCart(beer: Beer) {
    let cartBeers = this.beers$.getValue();
    let beerIndex = cartBeers.findIndex((b: Beer) => b.id === beer.id);
    beerIndex ? cartBeers.splice(beerIndex, 1) : null
    this.beers$.next(cartBeers);
  } */
}
