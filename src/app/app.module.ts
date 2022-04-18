import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioProductoComponent } from './inicio-producto/inicio-producto.component';
import { DescripcionProductoComponent } from './descripcion-producto/descripcion-producto.component';
import { CompraProductoComponent } from './compra-producto/compra-producto.component';
import { LoginProductoComponent } from './login-producto/login-producto.component';
import { AlmacenProductoComponent } from './almacen-producto/almacen-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioProductoComponent,
    DescripcionProductoComponent,
    CompraProductoComponent,
    LoginProductoComponent,
    AlmacenProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    AppComponent,
    InicioProductoComponent,
    DescripcionProductoComponent,
    CompraProductoComponent,
    LoginProductoComponent,
    AlmacenProductoComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
