import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Direction } from '../model/Direction';

@Component({
  selector: 'vehicles-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {
  vehicles = [];
  vehicleLog = [];
  constructor(private vehicleService : VehiclesService) { 
    this.vehicles = this.vehicleService.getVehicles();
  }

  addLog(vehicle){
    let {name, distanceTraveled, direction} = this.vehicles[vehicle];
    this.vehicleLog.unshift(`${name} traveled ${distanceTraveled} KM & currently facing ${Direction[direction]}`);
  }

}
