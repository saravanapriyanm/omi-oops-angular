import { Vehicle } from './Vehicle';

export class FloatingVehicle extends Vehicle {
    public turn(){
        this.direction = this.direction === 0 ? 3 : this.direction - 1;
    }
}