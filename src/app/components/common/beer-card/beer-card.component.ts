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

  constructor(private beersService: BeersService) { }

  ngOnInit(): void {

  }

}
