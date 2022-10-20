import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerPageComponent } from './beer-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BeerPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BeerPageRoutingModule { }
