import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { Ejmeplo1Component } from './formularios/ejmeplo1/ejmeplo1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFilterPipe,
    Ejmeplo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
