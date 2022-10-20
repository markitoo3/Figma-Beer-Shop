import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/beer', pathMatch: 'full' },
  { path: 'beer', loadChildren: () => import('./components/pages/beer-page/beer-page-routing.module').then(m => m.BeerPageRoutingModule) },
  { path: 'beer-details/id', loadChildren: () => import('./components/pages/beer-detals-page/beer-details-page-routing.module').then(m => m.BeerDetailsPageRoutingModule) },
  { path: 'beer-cart', loadChildren: () => import('./components/pages/beer-cart-page/beer-cart-page-routing.module').then(m => m.BeerCartPageRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
