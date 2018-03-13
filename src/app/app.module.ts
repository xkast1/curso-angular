import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';

import { HttpModule } from '@angular/http';


//Rutas
import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [

   appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
