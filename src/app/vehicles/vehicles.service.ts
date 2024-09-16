import { Injectable } from '@angular/core';
import { allVehicles } from './model/allVehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  vehicles = [];

  constructor() { }

  addVehicle(vehicle){
    if(vehicle.name !== '' && vehicle.type !== ''){
      let tempVehicle = new allVehicles[vehicle.type].class({name:vehicle.name});
      this.vehicles.unshift(tempVehicle);
    } else{
      
    }
  }

  getVehicles(){
    return this.vehicles;
  }
}
