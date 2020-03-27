import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { allVehicles } from '../model/allVehicles';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'vehicles-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {
  createVehicle = {
    name:'',
    type:''
  }

  fleetTypes = allVehicles;
  constructor(private vehiclesService:VehiclesService) {

  }

  addVehicle(){
    console.log(this.createVehicle);
    this.vehiclesService.addVehicle(this.createVehicle);
  }

}
