import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerDetailsPageComponent } from './beer-details-page.component';
import { BeerDetailsPageRoutingModule } from './beer-details-page-routing.module';




@NgModule({
  declarations: [
    BeerDetailsPageComponent
  ],
  imports: [
    CommonModule,
    BeerDetailsPageRoutingModule
  ]
})
export class BeerDetailsModule { }
