import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CreacionComponent } from './creacion/creacion.component';
import { RowCarritoComponent } from './row-carrito/row-carrito.component';
import { ProductoComponent } from './producto/producto.component';
import { Nav2Component } from './nav2/nav2.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TiendaComponent,
    CarritoComponent,
    CreacionComponent,
    RowCarritoComponent,
    ProductoComponent,
    Nav2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
