import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';



@NgModule({
  declarations: [AddVehicleComponent, VehicleListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AddVehicleComponent,
    VehicleListComponent
  ]
})
export class VehiclesModule { }
