import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BeerCartPageRoutingModule } from './components/pages/beer-cart-page/beer-cart-page-routing.module';
import { BeersModule } from './components/pages/beer-page/beer-page.module';
import { BeerDetailsPageRoutingModule } from './components/pages/beer-detals-page/beer-details-page-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './components/common/share-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BeerCartPageRoutingModule,
    BeersModule,
    BeerDetailsPageRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
