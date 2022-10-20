import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BeerCardComponent } from './beer-card/beer-card.component';



@NgModule({
  declarations: [
    BeerCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    BeerCardComponent
  ]
})
export class SharedModule { }
