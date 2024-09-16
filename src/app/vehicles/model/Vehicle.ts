interface vehicleProps{
    name: string;
};

export class Vehicle implements vehicleProps{
    name = '';
    distanceTraveled = 0;
    direction = 0;
    constructor(props:vehicleProps)
    {
        this.name = props.name;
    }
    public move()
    {
        this.distanceTraveled++;
    }
    public turn()
    {
        this.direction = this.direction === 3 ? 0 : this.direction + 1;
    }
}