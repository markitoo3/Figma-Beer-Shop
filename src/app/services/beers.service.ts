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


  constructor(private Http: HttpClient) { }


  getBeers(): Observable<Beer[]> {
    return this.Http.get<Beer[]>(`${BEERS_URL}`).pipe(
      map((beers: Beer[]) => {
        return beers.map((beer: Beer) => {
          let beersObject = {...beer}
          return beersObject

        })
      })

    )}



}
