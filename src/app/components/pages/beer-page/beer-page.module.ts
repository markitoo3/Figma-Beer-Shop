import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerPageComponent } from './beer-page.component';
import { BeerPageRoutingModule } from './beer-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../common/share-module.module';

@NgModule({
  declarations: [
    BeerPageComponent
  ],
  imports: [
    BeerPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ]
})
export class BeersModule { }
