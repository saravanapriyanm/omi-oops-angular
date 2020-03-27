import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiclesModule } from './vehicles/vehicles.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VehiclesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
