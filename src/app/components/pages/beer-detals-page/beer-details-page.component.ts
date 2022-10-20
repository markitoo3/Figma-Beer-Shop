import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beer-details-page',
  templateUrl: './beer-details-page.component.html',
  styleUrls: ['./beer-details-page.component.scss']
})
export class BeerDetailsPageComponent implements OnInit {

  constructor(private beersService: BeersService) { }

  ngOnInit(): void {
  }

}
