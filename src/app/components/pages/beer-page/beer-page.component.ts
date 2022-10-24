import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.scss']
})
export class BeerPageComponent implements OnInit {



  constructor(public beersService: BeersService) { }

  ngOnInit(): void {
    this.beersService.getAllBeers().subscribe((beers) => {
      this.beersService.beers$.next(beers);
    })
  }

}
