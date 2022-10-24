import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    BeerCardComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    BeerCardComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
