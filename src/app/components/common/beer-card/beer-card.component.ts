import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/Beer-model';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  @Input() beer?: Beer;

  constructor(public beersService: BeersService) { }

  ngOnInit(): void {
    this.beersService.favoriteBeers$.getValue().find(beer => {
      if (beer.id === this.beer?.id) {
        this.beer?.isFavorite ? this.beer.isFavorite = true : false
      }
    })
  }

  addToFavoriteBeers() {
    this.beer!.isFavorite = true;
    this.beersService.addToFavoriteBeers(this.beer!);
    console.log("added to favorite");
  }

  removeFromFavoriteBeers() {
    this.beer!.isFavorite = false;
    this.beersService.removeFromFavoriteBeers(this.beer!);
  }
}
