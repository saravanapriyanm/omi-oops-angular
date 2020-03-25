import { Component, OnInit } from '@angular/core';
import { WheeledVehicle, Car, FloatingVehicle, Direction } from './vehicles';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'omi-oops-ng';
  objectKeys = Object.keys;
  Direction = Direction;
  vehicleLog = [];
  vehicles = {
    cycle: new WheeledVehicle({name:'Cycle'}),
    sedan: new Car({name:'Sedan'}),
    suv: new Car({name:'SUV'}),
    ship: new FloatingVehicle({name:'Ship'})
  }

  addLog(vehicle){
    let {name, distanceTraveled, direction} = this.vehicles[vehicle];
    this.vehicleLog.unshift(`${name} traveled ${distanceTraveled} KM & currently facing ${Direction[direction]}`);
  }

  ngOnInit(){
    
  }
  
}
