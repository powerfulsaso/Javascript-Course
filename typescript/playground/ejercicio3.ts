interface Car {
    tires: number;
    turnOnEngine: () => void;
    pressPedal: () => void;
}

interface Motorcycle {
    tires: number;
    turnOnEngine: () => void;
    openThrottle: () => void;
}

type Vehicle = Car | Motorcycle;

function isCar(vehicle: Vehicle): vehicle is Car {
    return (vehicle as Car).pressPedal !== undefined;
}

function accelerate(vehicle: Vehicle): void {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    } else {
        vehicle.openThrottle();
    }
}

let car: Car = {
    tires: 4,
    turnOnEngine: function () { console.log("Engine running..."); },
    pressPedal: function () { console.log("Pressing pedal..."); }
}

let moto: Motorcycle = {
    tires: 2,
    turnOnEngine: function () { console.log("Engine running..."); },
    openThrottle: function () { console.log("Full throttle..."); }
}

console.log("It is a car:");
accelerate(car);
console.log("It is a motorcycle");
accelerate(moto);